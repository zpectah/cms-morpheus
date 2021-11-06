import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

interface LanguageToggleProps {
	languageList: string[];
	language: string;
	onChange: (language: string) => void;
}

const LanguageToggle = ({
	languageList,
	language,
	onChange,
}: LanguageToggleProps) => {
	const [lang, setLang] = useState(language);

	const changeHandler = (e, value) => {
		setLang(value);
		onChange(value);
	};

	return (
		<>
			<ToggleButtonGroup
				value={lang}
				exclusive
				onChange={changeHandler}
				aria-label="language"
				size="small"
			>
				{languageList &&
					languageList.map((lng) => (
						<ToggleButton key={lng} value={lng} aria-label={`Language ${lng}`}>
							&nbsp;{lng}&nbsp;
						</ToggleButton>
					))}
			</ToggleButtonGroup>
		</>
	);
};

export default LanguageToggle;
