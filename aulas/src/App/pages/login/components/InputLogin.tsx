import React from 'react';

interface IInputLoginProps {
	type?: string;
	label: string;
	value: string;
	onPressEnter?: () => void; //não retorna nada.
	onChange: (newValue: string) => void; //não tem retorno.
};

export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>((props, ref) => {
	
return (
	<label>
		<span>{props.label}</span>
		<input
			ref={ref}
			type={props.type}
			value={props.value}
			onChange={e => props.onChange(e.target.value)}
			onKeyDown={e => e.key === 'Enter'
			 ? props.onPressEnter && props.onPressEnter() : undefined
			}			
		/>	
	</label>
);
});
