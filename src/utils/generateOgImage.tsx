import satori from 'satori';
import type { SatoriOptions } from 'satori';
import { Resvg } from '@resvg/resvg-js';

import { SITE } from '../config';
import loadGoogleFonts, { type FontOptions } from './loadGoogleFont';
import { CollectionEntry } from 'astro:content';

const fetchFonts = async () => {
  // Regular Font
  const fontFileRegular = await fetch('https://www.1001fonts.com/download/font/ibm-plex-mono.regular.ttf');
  const fontRegular: ArrayBuffer = await fontFileRegular.arrayBuffer();

  // Bold Font
  const fontFileBold = await fetch('https://www.1001fonts.com/download/font/ibm-plex-mono.bold.ttf');
  const fontBold: ArrayBuffer = await fontFileBold.arrayBuffer();

  return { fontRegular, fontBold };
};

const { fontRegular, fontBold } = await fetchFonts();

const ogImage = (text: string) => {
  return (
    <div
      style={{
        background: '#fefbfb',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-1px',
          right: '-1px',
          border: '4px solid #000',
          background: '#ecebeb',
          opacity: '0.9',
          borderRadius: '4px',
          display: 'flex',
          justifyContent: 'center',
          margin: '2.5rem',
          width: '88%',
          height: '80%',
        }}
      />

      <div
        style={{
          border: '4px solid #000',
          background: '#fefbfb',
          borderRadius: '4px',
          display: 'flex',
          justifyContent: 'center',
          margin: '2rem',
          width: '88%',
          height: '80%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            margin: '20px',
            width: '90%',
            height: '90%',
          }}
        >
          <p
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              maxHeight: '84%',
              overflow: 'hidden',
            }}
          >
            {text}
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: '8px',
              fontSize: 28,
            }}
          >
            <span>
              by{' '}
              <span
                style={{
                  color: 'transparent',
                }}
              >
                "
              </span>
              <span style={{ overflow: 'hidden', fontWeight: 'bold' }}>{SITE.author}</span>
            </span>

            <span style={{ overflow: 'hidden', fontWeight: 'bold' }}>{SITE.title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

function svgBufferToPngBuffer(svg: string) {
  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  return pngData.asPng();
}

// const generateOgImage = async (mytext = SITE.title) => await satori(ogImage(mytext), options);

// export default generateOgImage;
//
const postOgImage = async (post: CollectionEntry<'blog'>) => {
  const options: SatoriOptions = {
    width: 1200,
    height: 630,
    embedFont: true,
    fonts: (await loadGoogleFonts(post.title + SITE.author + SITE.title + 'by')) as FontOptions[],
    // fonts: [
    //   {
    //     name: 'IBM Plex Mono',
    //     data: fontRegular,
    //     weight: 400,
    //     style: 'normal',
    //   },
    //   {
    //     name: 'IBM Plex Mono',
    //     data: fontBold,
    //     weight: 600,
    //     style: 'normal',
    //   },
    // ],
  };
  return await satori(ogImage(post.title), options);
};

export async function generateOgImageForPost(post: CollectionEntry<'blog'>) {
  const svg = await postOgImage(post);
  return svgBufferToPngBuffer(svg);
}
