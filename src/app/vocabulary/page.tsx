'use client';

import { useTranslation } from "react-i18next";

export default function VocabularyPage() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("vocabularyPage.title")}</h1>
      <p>{t("vocabularyPage.description")}</p>
    </>
  );
}
