import { useTranslation } from 'react-i18next';
import React, { Suspense } from 'react';
import LanguageSwitcher from "../LanguageSwitcher";

export const Main = () => {
	const { t } = useTranslation();
	return (
		<div className={"main"}>
			{/*// Menu section*/}
			<div>
				<LanguageSwitcher/>
			</div>

			{/*//bode section*/}
			<div style={{display:"flex"}}>
				<p> Please select menu <h1>{t('post')}</h1></p>
				<h1>{t('source_code')}</h1>
			</div>
		</div>
	)
}

