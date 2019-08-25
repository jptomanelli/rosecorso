import { useEffect, useState } from 'react';
import { interpolate } from "flubber";
import style from './blob.css';

const shapes = [
    "M124.2,-155.2C135.7,-112.7,102.3,-56.3,91.4,-11C80.4,34.4,91.8,68.8,80.3,93.7C68.8,118.5,34.4,133.7,-8.4,142.1C-51.1,150.5,-102.3,152,-134.1,127.1C-166,102.3,-178.5,51.1,-165.9,12.6C-153.3,-25.9,-115.5,-51.9,-83.7,-94.4C-51.9,-136.9,-25.9,-195.9,15.2,-211.1C56.3,-226.3,112.7,-197.7,124.2,-155.2Z",
    "M117.3,32.6C110,80.5,32.9,53,1.7,-8.7C-29.4,-70.3,-14.7,-166.2,23.8,-152.4C62.4,-138.7,124.7,-15.3,117.3,32.6Z",
    "M78.9,-111.8C115.6,-82,167.6,-76.7,203,-47.2C238.4,-17.7,257.1,35.9,222.9,51.2C188.8,66.5,101.7,43.4,55.8,68.1C9.8,92.8,4.9,165.4,-21.7,195.3C-48.4,225.3,-96.8,212.6,-99.5,173.8C-102.2,135,-59.2,70.1,-69.1,25.7C-78.9,-18.6,-141.7,-42.5,-165.4,-79.7C-189,-116.8,-173.6,-167.2,-139.5,-197.8C-105.4,-228.4,-52.7,-239.2,-15.8,-217.5C21.2,-195.8,42.3,-141.6,78.9,-111.8Z",
    "M63.7,-69.1C82.4,-60.2,97.3,-40,116.8,-8.9C136.3,22.3,160.4,64.4,146.6,81.3C132.9,98.3,81.3,90,44.1,89.9C7,89.9,-15.8,98,-61.8,108.1C-107.7,118.1,-176.9,130.1,-216.7,104.2C-256.5,78.3,-267.1,14.7,-230.5,-14.2C-193.9,-43.1,-110.1,-37.3,-63.9,-41.3C-17.6,-45.3,-8.8,-59.1,6.9,-67.3C22.5,-75.5,45,-78,63.7,-69.1Z",
    "M59.4,-20C95.3,-2.3,155.4,23.4,163,56.2C170.7,88.9,125.9,128.7,85.7,129.5C45.4,130.3,9.7,92.2,-22,68.3C-53.8,44.3,-81.5,34.6,-95.8,10.8C-110.1,-13.1,-110.9,-51.1,-92.7,-64.8C-74.5,-78.4,-37.3,-67.7,-12.8,-57.5C11.7,-47.4,23.5,-37.7,59.4,-20Z",
    "M173.6,-53.2C183,-27.5,119.7,25.1,57.4,67.7C-4.9,110.3,-66.2,142.9,-94.6,123.8C-123.1,104.7,-118.6,33.8,-97.3,-8.3C-76.1,-50.4,-38,-63.7,22,-70.9C82.1,-78,164.2,-79,173.6,-53.2Z",
    "M130.9,-34.4C154.6,30.4,148.4,113.1,105.1,144.6C61.7,176.1,-18.8,156.4,-74.2,113.5C-129.6,70.5,-159.9,4.4,-143.4,-50.6C-126.8,-105.5,-63.4,-149.3,-4.9,-147.7C53.6,-146.1,107.2,-99.1,130.9,-34.4Z",
    "M153.6,-159.4C197.1,-146.6,229,-96.3,228.5,-47.9C228,0.5,195,47,162.6,85.4C130.3,123.7,98.7,154,56.7,179.6C14.7,205.2,-37.6,226.2,-78.4,212.5C-119.1,198.9,-148.3,150.7,-179.5,101.4C-210.6,52.1,-243.7,1.6,-237.2,-43C-230.8,-87.7,-184.8,-126.6,-138.7,-138.9C-92.6,-151.3,-46.3,-137.2,4.4,-142.4C55.1,-147.6,110.1,-172.2,153.6,-159.4Z",
    "M138,-203.8C161.7,-172.8,151.7,-109.4,144.2,-63.2C136.6,-17,131.6,12.1,131,51.4C130.4,90.8,134.2,140.4,113.2,170.8C92.1,201.1,46,212,-5.9,220.1C-57.8,228.2,-115.6,233.4,-147.5,206.6C-179.3,179.8,-185.2,121,-183.3,72.4C-181.3,23.9,-171.5,-14.3,-162.4,-56C-153.2,-97.6,-144.8,-142.6,-117.9,-172.6C-90.9,-202.5,-45.5,-217.2,5.9,-225.3C57.2,-233.4,114.4,-234.8,138,-203.8Z" ,
    "M89.2,69.7C53.7,113,-79.7,118,-110.9,77.2C-142,36.3,-71,-50.3,-4.3,-52.8C62.4,-55.3,124.7,26.3,89.2,69.7Z",
    "M200,0C200,100,100,200,0,200C-100,200,-200,100,-200,0C-200,-100,-100,-200,0,-200C100,-200,200,-100,200,0Z",
    "M198,15C198,57.7,99,115.3,48.8,115.3C-1.3,115.3,-2.7,57.7,-2.7,15C-2.7,-27.7,-1.3,-55.3,48.8,-55.3C99,-55.3,198,-27.7,198,15Z",
    "M140.3,-107.5C152.4,-60,112.6,-9,80.5,38.5C48.5,86,24.2,130,-7.6,134.4C-39.5,138.8,-79.1,103.7,-100,62.6C-121,21.5,-123.3,-25.5,-103.5,-77.4C-83.7,-129.3,-41.9,-186.2,11.1,-192.6C64.1,-199,128.2,-155,140.3,-107.5Z",
    "M45.9,-50C50.1,-31.3,37.7,-12.8,47.7,37.9C57.7,88.5,90,171.3,68.7,205.8C47.4,240.3,-27.5,226.4,-79.6,191.3C-131.6,156.2,-160.9,99.8,-153.2,56.9C-145.5,14,-100.9,-15.5,-69.2,-40.4C-37.5,-65.3,-18.8,-85.6,1,-86.5C20.8,-87.3,41.7,-68.6,45.9,-50Z",
    "M82.1,-82.9C114.9,-70.3,155.9,-52.5,178,-18C200,16.5,203.1,67.8,184.3,112.1C165.5,156.4,124.8,193.8,90,175C55.3,156.3,26.4,81.4,-10.5,56.2C-47.5,30.9,-92.6,55.2,-138.3,46C-184,36.7,-230.4,-6,-238.1,-55.8C-245.8,-105.6,-214.8,-162.3,-168.7,-172.5C-122.6,-182.7,-61.3,-146.4,-18.3,-124.5C24.6,-102.7,49.3,-95.4,82.1,-82.9Z",
    "M160.9,-67.5C176,-5.9,133.3,59.4,87.9,83.5C42.5,107.6,-5.5,90.6,-34,65.5C-62.6,40.3,-71.7,7,-62.8,-46.1C-53.9,-99.2,-26.9,-172.1,23,-179.6C72.9,-187,145.8,-129,160.9,-67.5Z" ,
    "M65.3,-62.9C107.4,-23.1,180.2,-11.5,203.1,22.9C225.9,57.3,198.9,114.6,156.7,159.9C114.6,205.2,57.3,238.6,14,224.6C-29.2,210.6,-58.5,149.1,-67.5,103.8C-76.5,58.5,-65.2,29.2,-80.5,-15.3C-95.9,-59.9,-137.7,-119.7,-128.7,-159.6C-119.7,-199.4,-59.9,-219.2,-24.2,-195C11.5,-170.9,23.1,-102.8,65.3,-62.9Z",
    "M65.7,-90.8C81.8,-49.5,89.4,-24.7,96.5,7.1C103.6,38.9,110.1,77.8,93.9,126.1C77.8,174.4,38.9,232.2,-7.2,239.4C-53.3,246.6,-106.5,203.2,-131.4,154.9C-156.2,106.5,-152.6,53.3,-138.3,14.3C-124.1,-24.7,-99.2,-49.5,-74.3,-90.8C-49.5,-132.2,-24.7,-190.1,0,-190.1C24.7,-190.1,49.5,-132.2,65.7,-90.8Z",
    "M138.7,-118.5C187.4,-90,239.7,-45,241.8,2.1C243.9,49.3,195.9,98.5,147.2,145.9C98.5,193.2,49.3,238.6,-7.5,246.1C-64.3,253.7,-128.7,223.4,-174.5,176C-220.4,128.7,-247.7,64.3,-246.3,1.4C-244.9,-61.5,-214.7,-123,-168.9,-151.5C-123,-180,-61.5,-175.5,-8.2,-167.3C45,-159,90,-147,138.7,-118.5Z",
    "M81.7,-86.2C97.3,-66,95.7,-33,102.7,7.1C109.8,47.1,125.6,94.3,109.9,116.6C94.3,138.9,47.1,136.5,-6.4,142.8C-59.9,149.2,-119.7,164.4,-137.2,142.1C-154.7,119.7,-129.9,59.9,-128.5,1.4C-127,-57,-149.1,-114.1,-131.6,-134.2C-114.1,-154.4,-57,-137.7,-12,-125.7C33,-113.7,66,-106.3,81.7,-86.2Z"
];

const getNextIndex = i => (i + 1) % shapes.length;
const animation = options => {
    const tick = progress => {
        if (options.onProgress) {
            options.onProgress(progress);
        }
        if (progress < 1) setTimeout(() => tick(progress + .005), 50);
        else if (options.onComplete) options.onComplete();
    };
    return tick;
};

function Blob({ classes, fill, index, animate }) {
    fill = fill || '#eee';
   
    index = index || 0;
    animate = !!animate;
    const [ path, setPath ] = useState(shapes[index]);

    useEffect(() => {
        if (animate) {
            const nextPath = () => {
                const next = getNextIndex(index);
                const interpolator = interpolate(shapes[index], shapes[next]);
                index = next;
                const a = animation({
                    onProgress: progress => {
                        setPath(interpolator(progress));
                    },
                    onComplete: nextPath
                });
                a(0);
            };
            nextPath();
        }
    }, [getNextIndex, animation]);

    return (
        <svg className={`${style.svg} ${classes}`} width="600" height="600" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(300,300)">
                <path d={path} fill={fill} />
            </g>
        </svg>
    );
};

export default Blob;