import React, { FC, SVGProps } from 'react';

export const wndosIcon: FC<SVGProps<SVGSVGElement>> = ({ width = 16, height = 14 }) => {

  return (
    <svg
    width={width}
    height={height}
    fill='none'
    viewBox='0 0 16 14'
    xmlns='http://www.w3.org/2000/svg'
    >
       <path
        id="ee-background"
        fill="#fff"
        fillOpacity="0"
        d="M0 0H14V14H0z"
        pointerEvents="none"
      ></path>
      <image
        width="16"
        height="14"
        transform="matrix(.875 0 0 .875 0 1)"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAAAXNSR0IArs4c6QAAAdRJREFUOE+Nkk1IVFEUx3/3PYcxlec0yCzCoEX2AYL6hllIo0S2SCnBYJpKxKCipo0Sgn3YpqCxyFoEUgqGBtOgEhEIfdAuiRpKJdq2ahHjYLoozOndG743vQrS3lnc/z1w7u+cc88RrNpg5xUSzRftuyeTFqGuzczPfxZ2vErLxqtbnr19Mzqm56XKC6EQmrKEVAihdOn4KwXf6ty0vy7Y0j6zu67YBQTjc6cWxpPDngq4Fu+O1F8YyDTW6C4gdGj2dHaif8gT4HqsK1LfdzPTsB4gZu4hsrUGoQuUpdmK0hBCEN0ejeTbmtcH/BhdQvcba1VkTu+U76J/VhCbS2Qnk3fdBzbAZ9AzBjc64HwKkkcdbY9iLrX8F7CI7iun5z4c3gUTr6CjAVIv4dxBzPdhDwBEOYkRKPXD1+9gFMO+MOytxmmh9vcUKuKzZ3Lj/XfcFr6NfMGSAY4PQSgA2UXw+2DwBJRtwJze4QGwYgW4/BDOtsKtx3CsCaor7RweAPcWkGojTz5Aay1MvoYDYTv7PwCpZZ7nnvJxJuO2cLKpF62oDBSwum+/1Ik48igsH7RVFf7AMIJVUy8+lWhF/r/mrpxFdU7QCrotV0p6Kt3N8KXbPwHPuN0PcTW2qwAAAABJRU5ErkJggg=="
      ></image>
    </svg>
  );
}
