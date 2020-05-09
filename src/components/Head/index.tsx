import React, { FC } from 'react';
import NextHead from 'next/head';

interface IMetatagas {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  favicon?: string;
}

//TODO: remove external place
const METADATA = {
  title: 'Ricardo Rodrigues | Front End Developer',
  description: 'Personal Portfolio. A passionate for new emerging technologies.',
  keywords: ['Ricardo', 'Rodrigues', 'front', 'end', 'curriculum', 'portfolio'],
  author: 'Ricardo Rodrigues',
  favicon:
    'data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAAAAABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAADPjAcAzogAAM6JAADOiQAAzokANM6JAJjOiQDazokA9c6JAPbOiQDczokAnM6JADjOiQAAzokAAM6JAADOiAAAz40HAM6JAADOigAFzokAisyFAPbMhgD/zooA/86KAP/OigD/zooA/86KAP/OigD4zooAkM6KAAjOigAAzokAAM+NBwDOiQAGzYcAr8+LBP/bqEH/2KAx/82GAP/OigD/zooA/82IAP/MhAD/zIQA/8yEAP/OiQC3zooACM6JAADPjQcAzYcAhtCMC//z4Lv////////////fsVb/zIQA/86IAP/SkhT/7dKd//HbsP/htV//0I4M/86JAJDOiQAAz40HLcuCAPnnxH3//////92sS//px4T/+/Lf/86KBP/LggD/7dCX///////15cf///////LdtP/NhgH8zokANc+MBZbOiAL/+/Lf//ThvP/KfQD/1Jcd///99//XnSr/zogB//747P/z3rX/yn8A/9ihMv/cq0f/zYcA/86JAJ/OigLa0pMU///////ry4z/y4EA/9CMBv/99un/3q9Q/9WZIv//////47ll/8uDAP/NhgD/zYYA/86KAP/OiQDgzooB9dOVGP//////682R/8uCAP/NhgD/+u7Y/+O6aP/juGT//fbq/9KRE//NhwD/zooA/86KAP/OigD/zokA+c+LBPTQjQj//vnv//Tguv/LggD/1Zkk//z05P/469L//ffr/+vOkv/SkRj/zIQA/86JAP/OigD/zooA/86JAPnPjQfYzIMA//LcsP///Pb/0I0K/+rJi//++/T///z2//Leuf/68Nz///v0/+fCe//NhwD/zokA/86KAP/OiQDfz40HksyEAP/cqUL//////+fEfP/IewD/682Q///89P/OhwD/zokJ/+bAdv//////4bVe/8yEAP/OigD/zokAm8+NByrOiQD3zIUA/+/Vov//////26dC/9OTGP/qyYn/z4sD/8yDAP/NhwD///z1//Lcsv/MgwD/zooA+86JADHPjQcAzokAgM2IAP/Piwn/8t2z///////pyIn/1Jgk/9GRE//Skxv/58N8///////mwXb/zIMA/86KAIrOiQAAz40HAM6JAAPOigCnzYcA/86IAv/lv3X//Pbr/////////fr////////////u05//z4sJ/86JAK/OigAGzokAAM+MBgDOiAAAzokAAs6JAIDNiADxy4MA/9COC//apj7/4bZh/+C0Xf/WnSz/zIUA882HAIfOiQAFzokAAM6IAADQkA4Az4wHAM+NBwDPjQcAz40HLM+NB5DOiwPUzYcA8cyGAPHMhgDWzYkAk8+MBjDPjQcAz40HAM+NBwDPjAcA+B8AAOAHAADAAwAAgAEAAIABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAQAAgAEAAMADAADgBwAA+B8AAA==',
};

const Head: FC<IMetatagas> = ({
  title = METADATA.title,
  description = METADATA.description,
  keywords = METADATA.keywords,
  author = METADATA.author,
  favicon = METADATA.favicon
}) => (
  <NextHead>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta
      name="og:description"
      property="og:description"
      content={description}
    />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content="" />
    <meta name="twitter:creator" content={author} />
    <link rel="icon" type="image/png" href={favicon} />
    <link rel="apple-touch-icon" href={favicon} />
    <meta property="og:image" content="" />
    <meta name="twitter:image" content="" />
    <meta name="keywords" content={keywords.join(`, `)} />
    <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&family=Pacifico&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
  </NextHead>
);

export default Head;
