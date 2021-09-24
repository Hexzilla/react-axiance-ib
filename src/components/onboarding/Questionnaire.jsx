import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import ThankYouModal from './ThankYouModal';
import WarningModal from './WarningModal';
import '../../styles/Questionnaire.scss';

const IbQuestionnaire = ({ user }) => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const [isThankModalOpen, setIsThankModalOpen] = useState(false);
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    servicesWebsite: '',
    furtherServices: '',
    financialServicesName: '',
    regNumber: '',
    regulatorName: '',
    regulatorWebsite: '',
    referralsFromRegion: '',
    referralsFromCountries: '',
  });

  const otherSelectedForServices = t('register.questionnaire.servicesOptions', { returnObjects: true })[4];
  const yesSelected = t('register.questionnaire.yesNoOptions', { returnObjects: true })[0];
  const noSelected = t('register.questionnaire.yesNoOptions', { returnObjects: true })[1];

  const setFieldValue = (key, value) => {
    formData[key] = value;
    setFormData({ ...formData });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const {
      noOfReferrals,
      referralsPerMonth,
      referralsFromRegion,
      modeOfCommunication,
      furtherServices,
      services,
      hasServicesWebsite,
      servicesWebsite,
      isRegulatedByFinancialService,
      financialServicesName,
      regNumber,
      regulatorName,
      regulatorWebsite,
      legalActionSubject,
    } = formData;

    const financialServicesAuthSectionIncomplete = isRegulatedByFinancialService === yesSelected
      && (!financialServicesName || !regNumber
        || !regulatorName || !regulatorWebsite || !legalActionSubject);

    if (!noOfReferrals || !referralsPerMonth || !referralsFromRegion
      || !modeOfCommunication || !services || !hasServicesWebsite
      || !isRegulatedByFinancialService) {
      enqueueSnackbar('Answer all the questions from 1 to 6', {
        variant: 'error',
      });
    } else if ((hasServicesWebsite === yesSelected && !servicesWebsite)) {
      enqueueSnackbar('Provide the link to your website on question 5', {
        variant: 'error',
      });
    } else if (!furtherServices && services === otherSelectedForServices) {
      enqueueSnackbar('Specify Other on question 4', {
        variant: 'error',
      });
    } else if (financialServicesAuthSectionIncomplete) {
      enqueueSnackbar('Complete all the relevant parts (1-4) under question 6', {
        variant: 'error',
      });
    } else if (formData.legalActionSubject === yesSelected) {
      setIsWarningModalOpen(true);
    } else {
      // -- call backendURL here --
      localStorage.setItem('questionnaireCompleted', true);
      setIsThankModalOpen(!isThankModalOpen);
    }
  };

  const clearStoredDataAboutFinancialService = () => {
    setFieldValue('financialServicesName', '');
    setFieldValue('regNumber', '');
    setFieldValue('regulatorName', '');
    setFieldValue('regulatorWebsite', '');
    setFieldValue('legalActionSubject', '');
  };

  useEffect(() => {
    if (formData.hasServicesWebsite === noSelected) {
      setFieldValue('servicesWebsite', '');
    }
  }, [formData.hasServicesWebsite]);

  useEffect(() => {
    if (formData.services !== otherSelectedForServices) {
      setFieldValue('furtherServices', '');
    }
  }, [formData.services]);

  useEffect(() => {
    if (formData.isRegulatedByFinancialService === noSelected) {
      clearStoredDataAboutFinancialService();
    }
  }, [formData.isRegulatedByFinancialService]);

  useEffect(() => {
    if (formData.legalActionSubject === yesSelected) {
      setIsWarningModalOpen(true);
    }
  }, [formData.legalActionSubject]);

  return (
    <div className="form">
      <WarningModal
        open={isWarningModalOpen}
        onClose={() => setIsWarningModalOpen(false)}
      />
      <ThankYouModal
        open={isThankModalOpen}
        onClose={() => setIsThankModalOpen(!isThankModalOpen)}
      />
      <div className="form-container container">
        <h2 className="title">
          {t('hello.label')}
          {' '}
          {user.firstName}
          !
        </h2>
        <form
          className="form-content"
          onSubmit={onSubmit}
        >
          <div className="flex-div">
            <div className="empty-div" />
            <div className="subtitle">
              {t('register.questionnaire.intro')}
            </div>
            <div className="empty-div" />
          </div>
          <h5>
            {t('register.questionnaire.referralsQuestion')}
          </h5>
          <div className="options-question-1">
            {t('register.questionnaire.referralsQuestionOptions', { returnObjects: true }).map(
              (option) => (
                <div className="radio">
                  <label className="radioLabel">
                    <input
                      type="radio"
                      value={option}
                      checked={formData.noOfReferrals === option}
                      onChange={(e) => setFieldValue('noOfReferrals', e.target.value)}
                    />
                    {option}
                  </label>
                </div>
              ),
            )}
          </div>
          <h5>
            {t('register.questionnaire.perMonthQuestion')}
          </h5>
          <div className="yes-no-container">
            {t('register.questionnaire.yesNoOptions', { returnObjects: true }).map(
              (option) => (
                <div className="radio">
                  <label className="radioLabel">
                    <input
                      type="radio"
                      value={option}
                      checked={formData.referralsPerMonth === option}
                      onChange={(e) => setFieldValue('referralsPerMonth', e.target.value)}
                    />
                    {option}
                  </label>
                </div>
              ),
            )}
          </div>
          <h5>
            {t('register.questionnaire.countriesToAttractQuestion')}
          </h5>
          <div className="options-container">
            {t('register.questionnaire.referralsFromCountriesOptions', { returnObjects: true }).map(
              (option) => (
                <div className="radio">
                  <label className="radioLabel">
                    <input
                      type="radio"
                      value={option}
                      checked={formData.referralsFromRegion === option}
                      onChange={(e) => setFieldValue('referralsFromRegion', e.target.value)}
                    />
                    {option}
                  </label>
                </div>
              ),
            )}
          </div>
          <div className="options-container" style={{ marginTop: '20px' }}>
            <input
              type="text"
              name="referralsFromCountries"
              label="test"
              placeholder={t('register.questionnaire.specifyTheCountries')}
              className="input-fullWidth-container"
              onChange={(e) => setFieldValue('referralsFromCountries', e.target.value)}
              value={formData.referralsFromCountries}
            />
          </div>
          <h5>
            {t('register.questionnaire.modeOfCommunication')}
          </h5>
          <div className="options-question-3">
            {t('register.questionnaire.modeOfCommunicationOptions', { returnObjects: true }).map(
              (option) => (
                <div className="radio">
                  <label className="radioLabel">
                    <input
                      type="radio"
                      value={option}
                      checked={formData.modeOfCommunication === option}
                      onChange={(e) => setFieldValue('modeOfCommunication', e.target.value)}
                    />
                    {option}
                  </label>
                </div>
              ),
            )}
          </div>
          <h5>
            {t('register.questionnaire.servicesQuestion')}
          </h5>
          <div className="options-container">
            {t('register.questionnaire.servicesOptions', { returnObjects: true }).map(
              (option) => (
                <div className="radio">
                  <label className="radioLabel">
                    <input
                      type="radio"
                      value={option}
                      checked={formData.services === option}
                      onChange={(e) => setFieldValue('services', e.target.value)}
                    />
                    {option}
                  </label>
                </div>
              ),
            )}
          </div>
          <h5 className="green-specify-text">
            {t('register.questionnaire.provideOther')}
          </h5>
          <textarea
            type="text"
            name="furtherServices"
            className="input-fullWidth-container"
            rows="3"
            onChange={(e) => setFieldValue('furtherServices', e.target.value)}
            value={formData.furtherServices}
            disabled={formData.services !== otherSelectedForServices}
          />
          <h5>
            {t('register.questionnaire.servicesWebsiteQuestion')}
          </h5>
          <div className="yes-no-container">
            {t('register.questionnaire.yesNoOptions', { returnObjects: true }).map(
              (option) => (
                <div className="radio">
                  <label className="radioLabel">
                    <input
                      type="radio"
                      value={option}
                      checked={formData.hasServicesWebsite === option}
                      onChange={(e) => setFieldValue('hasServicesWebsite', e.target.value)}
                    />
                    {option}
                  </label>
                </div>
              ),
            )}
          </div>
          <h5>
            {t('register.questionnaire.servicesWebsiteQuestionYes')}
          </h5>
          <input
            type="text"
            name="servicesWebsite"
            className="input-fullWidth-container"
            disabled={formData.hasServicesWebsite !== yesSelected}
            onChange={(e) => setFieldValue('servicesWebsite', e.target.value)}
            value={formData.servicesWebsite}
          />
          <h5>
            {t('register.questionnaire.regulatedQuestion')}
          </h5>
          <div className="yes-no-container">
            {t('register.questionnaire.yesNoOptions', { returnObjects: true }).map(
              (option) => (
                <div className="radio">
                  <label className="radioLabel">
                    <input
                      type="radio"
                      value={option}
                      checked={formData.isRegulatedByFinancialService === option}
                      onChange={(e) => setFieldValue('isRegulatedByFinancialService', e.target.value)}
                    />
                    {option}
                  </label>
                </div>
              ),
            )}
          </div>
          {
            formData.isRegulatedByFinancialService === yesSelected
            && (
            <>
              <h5>
                {t('register.questionnaire.financialServicesQuestion')}
              </h5>
              <div className="options-container">
                <input
                  type="text"
                  placeholder={t('register.questionnaire.yourFinancialServices')}
                  className="input-half-container"
                  name="financialServicesName"
                  onChange={(e) => setFieldValue('financialServicesName', e.target.value)}
                  value={formData.financialServicesName}
                />
                <input
                  type="text"
                  placeholder={t('register.questionnaire.yourRegistrationNumber')}
                  name="regNumber"
                  className="input-half-container"
                  onChange={(e) => setFieldValue('regNumber', e.target.value)}
                  value={formData.regNumber}
                />
              </div>
              <h5>
                {t('register.questionnaire.regulatorName')}
              </h5>
              <input
                type="text"
                name="regulatorName"
                className="input-fullWidth-container"
                onChange={(e) => setFieldValue('regulatorName', e.target.value)}
                value={formData.regulatorName}
              />
              <h5>
                {t('register.questionnaire.regulatorWebsite')}
              </h5>
              <input
                type="text"
                name="regulatorWebsite"
                className="input-fullWidth-container"
                onChange={(e) => setFieldValue('regulatorWebsite', e.target.value)}
                value={formData.regulatorWebsite}
              />
              <h5>
                {t('register.questionnaire.financialCrimeQuestion')}
              </h5>
              <div className="yes-no-container">
                {t('register.questionnaire.yesNoOptions', { returnObjects: true }).map(
                  (option) => (
                    <div className="radio">
                      <label className="radioLabel">
                        <input
                          type="radio"
                          value={option}
                          checked={formData.legalActionSubject === option}
                          onChange={(e) => setFieldValue('legalActionSubject', e.target.value)}
                        />
                        {option}
                      </label>
                    </div>
                  ),
                )}
              </div>
            </>
            )
          }
          <input
            type="submit"
            value={t('register.questionnaire.submit')}
            className="submit-btn"
          />
        </form>
      </div>
    </div>
  );
};

export default IbQuestionnaire;
