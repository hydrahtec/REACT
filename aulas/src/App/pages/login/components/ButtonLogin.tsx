interface IButtonLoginProps {
	onClick: () => void;
	type?: 'button'|'submit'|'reset';

	children: React.ReactNode;
};

export const ButtonLogin : React.FC<IButtonLoginProps> = ({}) => {

};