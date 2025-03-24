import "../css/main-btn.css"

interface MainBtnProps{
    small: boolean;
    children: string;
}

const MainBtn: React.FC<MainBtnProps> = ({children, small}) => {
  return (
        <button className={small ? 'main-btn--small' : 'main-btn'}>{children}</button>
  );
};

export default MainBtn;