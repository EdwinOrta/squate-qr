import React, { useState } from 'react';

import { Title, Select, Button, Spinner } from 'components';
import { QR_TYPES } from 'constant';
import { URL, VCard, Wifi } from 'layouts';
import { generateQR } from 'services';

const blockEl = 'm-square__home';

const initialValue = QR_TYPES[0];

const Home = () => {
  const [optionSelected, setOptionSelected] = useState({ option: initialValue.value, description: initialValue.desc });
  const [loader, setLoader] = useState(false);
  const [showDownload, setShowDownload] = useState(false);
  const [errorCreateQR, setErrorCreateQR] = useState(false);

  const handleOption = (option) => {
    const description = QR_TYPES.find((elem) => elem.value === option).desc;
    setOptionSelected({ option, description });
  };

  const handleGenerateQR = async (pathParameters) => {
    setLoader(true);
    try {
      const blob = await generateQR(pathParameters);
      const imageUrl = window.URL.createObjectURL(blob);
      const imgElement = document.createElement('img');
      imgElement.src = imageUrl;

      const imgContainer = document.getElementById('qr-container');
      while (imgContainer.firstChild) {
        imgContainer.removeChild(imgContainer.firstChild);
      }
      imgContainer.appendChild(imgElement);
      setShowDownload(true);
      setErrorCreateQR(false);
    } catch (err) {
      ///Something went wrong
      setErrorCreateQR(true);
      setShowDownload(false);
      console.log(err);
    }
    setLoader(false);
  };

  const handleDownloadQR = () => {
    const qrContainer = document.getElementById('qr-container');
    const srcQR = qrContainer.firstChild.src;
    const link = document.createElement('a');
    link.href = srcQR;
    link.download = `${optionSelected.option} QR`;
    document.body.appendChild(link);

    link.dispatchEvent(
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window,
      })
    );

    document.body.removeChild(link);
  };

  return (
    <div className={blockEl}>
      <Title>Square QR code generator</Title>

      <div className={`${blockEl}__message`}>
        Welcome, this web application will help you to create a QR code for different applications.
      </div>

      <Select
        className={`${blockEl}__select`}
        id="qr"
        text="Choose the QR type that you need:"
        options={QR_TYPES}
        onChange={handleOption}
      />

      <div className={`${blockEl}__description`}>{optionSelected.description}</div>

      {optionSelected.option === 'standard' && <URL generateQR={handleGenerateQR} />}
      {optionSelected.option === 'wifi-login' && <Wifi generateQR={handleGenerateQR} />}
      {optionSelected.option === 'vCard' && <VCard generateQR={handleGenerateQR} />}

      {loader && <Spinner className={`${blockEl}__spinner`} />}

      <div id="qr-container" className={`${blockEl}__qr-container`}></div>

      {showDownload && (
        <Button id="download" className={`${blockEl}__button`} onClick={handleDownloadQR}>
          Download QR
        </Button>
      )}

      {errorCreateQR && (
        <div className={`${blockEl}__error-service`}>Something went wrong with the service try later.</div>
      )}
    </div>
  );
};

export default Home;
