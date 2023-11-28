import html2canvas from "html2canvas";

export const htmlToImageDownloader = (elementId) => {
    const element = document.getElementById(elementId); // 파라미터로 받은 ID 사용
    if (element) {
        html2canvas(element).then((canvas) => {
            const image = canvas.toDataURL('image/png');
            const downloadLink = document.createElement('a');
            downloadLink.href = image;
            downloadLink.download = `${elementId}-image.png`; // 다운로드 파일명에 ID 포함
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        });
    }
};
