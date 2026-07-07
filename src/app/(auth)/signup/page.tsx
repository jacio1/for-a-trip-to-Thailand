'use client'

import { useTranslation } from "react-i18next";

export default function SignUpPage(){
      const { t } = useTranslation();
    
    return(
        <div>
            <h1>{t("Registration")}</h1>
        </div>
    )
}