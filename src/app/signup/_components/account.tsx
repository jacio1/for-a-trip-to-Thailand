"use client";

import { useTranslation } from "react-i18next";
import InputRow from "@/src/components/ui/input/InputRow";

interface AccountProps {
  setNewEmail: (value: string) => void;
  setNewLogin: (value: string) => void;
  setNewPassword: (value: string) => void;
  openTerms: () => void;
}

export default function Account({ setNewEmail, setNewLogin, setNewPassword, openTerms }: AccountProps) {
  const { t } = useTranslation();

  return (
    <form className="w-full h-full p-3 flex gap-3 flex-col justify-center">
      <InputRow onChange={setNewEmail} placeholder={t('email')} />
      <p className="fs-s fw-400" style={{color: 'var(--text-sub)'}}>After sign up attempt you will need to confirm account creation via email</p>
      <InputRow onChange={setNewLogin} placeholder={t('login')} />
      <p className="fs-s fw-400" style={{color: 'var(--text-sub)'}}>Username should contain at least 4 symbols and should not contain sensitive content</p>
      <InputRow onChange={setNewPassword} placeholder={t('password')} type="password" />
      <p className="fs-s fw-400" style={{color: 'var(--text-sub)'}}>Password should contain at least 6 symbols</p>
      <p className="fs-s fw-400" style={{color: 'var(--link-color)'}} onClick={openTerms}>By continuing, you agree to our latest version of the public offer</p>
    </form>
  );
}
