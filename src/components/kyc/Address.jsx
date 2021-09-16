import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import '../../styles/Onboarding.scss';
import { Radio } from '@material-ui/core';
import { FiUpload, FiXCircle } from 'react-icons/fi';
import { documentController } from '../../controllers';

export default function Address({ onUploadSuccess }) {
  const [file, setFile] = useState(null);
  const [documentType, setDocumentType] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const user = JSON.parse(localStorage.getItem('user'));

  const onFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await documentController.upload(user, file, false, null, 'PROOF_OF_ADDRESS', documentType);
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

  const selectDocumentType = (e) => {
    setFile(null);
    setDocumentType(e.target.value);
  };

  return (
    <div className="onboarding-address">
      <div className="onboarding-address-inner">
        <form className="onboard" onSubmit={onFormSubmit}>
          <h2 className="title">{t('address.documentType')}</h2>
          <div className="doc-type">
            <label htmlFor="bank-statement">
              <Radio
                id="bank-statement"
                value="BANK_STATEMENT"
                name="doc-type"
                onChange={selectDocumentType}
                checked={documentType === 'BANK_STATEMENT'}
              />
              {t('address.bankStatement')}
            </label>
            <label htmlFor="utility-bill">
              <Radio
                id="utility-bill"
                value="UTILITY_BILL"
                name="doc-type"
                onChange={selectDocumentType}
                checked={documentType === 'UTILITY_BILL'}
              />
              {t('address.utilityBill')}
            </label>

            <label htmlFor="rental-agreement">
              <Radio
                id="rental-agreement"
                value="RENTAL_AGREEMENT"
                name="doc-type"
                onChange={selectDocumentType}
                checked={documentType === 'RENTAL_AGREEMENT'}
              />
              {t('address.rentalAgreement')}
            </label>
            <label htmlFor="tax-bill">
              <Radio
                id="tax-bill"
                value="TAX_BILL"
                name="doc-type"
                onChange={selectDocumentType}
                checked={documentType === 'TAX_BILL'}
              />
              {t('address.taxBill')}
            </label>
            <label htmlFor="insurance">
              <Radio
                id="insurance"
                value="INSURANCE"
                name="doc-type"
                onChange={selectDocumentType}
                checked={documentType === 'INSURANCE'}
              />
              {t('address.insurance')}
            </label>
          </div>
          <div className="file-upload">
            <label htmlFor="address-document" className={file ? 'custom-file-upload disabled' : 'custom-file-upload'}>
              {file ? (
                <>
                  <FiXCircle
                    onMouseDown={() => {
                      setFile(null);
                      document.getElementById('address-document').value = '';
                    }}
                    className="upload-icon"
                  />
                  {file.name}
                </>
              ) : (
                <>
                  <FiUpload className="upload-icon" />
                  {t('address.idFront')}
                </>
              )}
            </label>
            <input
              id="address-document"
              name="document"
              type="file"
              disabled={file}
              accept="application/pdf, image/*"
              onChange={onChange}
            />
          </div>
          <p className="file-note">{t('address.fileNote')}</p>
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
