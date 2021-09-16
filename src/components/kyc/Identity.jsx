import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import '../../styles/Onboarding.scss';
import { Radio } from '@material-ui/core';
import { FiUpload, FiXCircle } from 'react-icons/fi';
import { documentController } from '../../controllers';

export default function Identity({ onUploadSuccess }) {
  const [file, setFile] = useState(null);
  const [fileBack, setFileBack] = useState(null);
  const [documentType, setDocumentType] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const user = JSON.parse(localStorage.getItem('user'));

  const onFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await documentController.upload(user, file, documentType !== 'PASSPORT_FRONT', fileBack, 'PROOF_OF_ID', documentType);
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: 'error',
      });
      return;
    }

    enqueueSnackbar('Document uploaded successfully', {
      variant: 'success',
      preventDuplicate: true,
    });

    if (onUploadSuccess) {
      onUploadSuccess();
    }
  };

  const onChange = (e) => {
    setFile(e.target.files[0]);
    e.target.value = null;
  };

  const backDocUpload = (e) => {
    setFileBack(e.target.files[0]);
    e.target.value = null;
  };

  const selectDocumentType = (e) => {
    setFile(null);
    setFileBack(null);
    setDocumentType(e.target.value);
  };

  return (
    <div className="onboarding-identity">
      <div className="onboarding-identity-inner">
        <form className="onboard" onSubmit={onFormSubmit}>
          <h2 className="title">{t('address.documentType')}</h2>
          <div className="doc-type">
            <label htmlFor="identity-card">
              <Radio
                id="identity-card"
                value="IDENTITY_CARD_FRONT"
                name="doc-type"
                onChange={selectDocumentType}
                checked={documentType === 'IDENTITY_CARD_FRONT'}
              />
              {t('identity.ID')}
            </label>
            <label htmlFor="passport">
              <Radio
                id="passport"
                value="PASSPORT_FRONT"
                name="doc-type"
                onChange={selectDocumentType}
                checked={documentType === 'PASSPORT_FRONT'}
              />
              {t('identity.passport')}
            </label>
            <label htmlFor="driving-license">
              <Radio
                id="driving-license"
                value="DRIVING_LICENSE_FRONT"
                name="doc-type"
                onChange={selectDocumentType}
                checked={documentType === 'DRIVING_LICENSE_FRONT'}
              />
              {t('identity.drivingLicense')}
            </label>
          </div>
          <div className="file-upload">
            <label
              htmlFor="id-document"
              className={
                file ? 'custom-file-upload disabled' : 'custom-file-upload'
              }
            >
              {file ? (
                <>
                  <FiXCircle
                    onMouseDown={() => {
                      setFile(null);
                      document.getElementById('id-document').value = '';
                    }}
                    className="upload-icon"
                  />
                  {file.name}
                </>
              ) : (
                <>
                  <FiUpload className="upload-icon" />
                  {t('identity.frontSide')}
                </>
              )}
            </label>
            <input
              id="id-document"
              name="document"
              type="file"
              disabled={file}
              accept="application/pdf, image/*"
              onChange={onChange}
            />
            {documentType !== 'PASSPORT_FRONT' ? (
              <>
                <label
                  htmlFor="id-back-document"
                  className={
                    fileBack
                      ? 'custom-file-upload disabled'
                      : 'custom-file-upload'
                  }
                >
                  {fileBack ? (
                    <>
                      <FiXCircle
                        onMouseDown={() => {
                          setFileBack(null);
                          document.getElementById('id-back-document').value = '';
                        }}
                        className="upload-icon"
                      />
                      {fileBack.name}
                    </>
                  ) : (
                    <>
                      <FiUpload className="upload-icon" />
                      {t('identity.backSide')}
                    </>
                  )}
                </label>
                <input
                  id="id-back-document"
                  name="back-document"
                  type="file"
                  disabled={fileBack}
                  accept="application/pdf, image/*"
                  onChange={backDocUpload}
                />
              </>
            ) : null}
          </div>
          <p className="file-note">{t('identity.fileNote')}</p>
          <input
            className="submit-doc green-cta"
            type="submit"
            value={t('submit')}
          />
        </form>
      </div>
    </div>
  );
}
