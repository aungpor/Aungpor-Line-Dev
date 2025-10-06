
interface Props {
  active: boolean;
}

const SpinDotLoading = ({ active, className = "" }) => {
  return (
    <div>
      {active && (
        <div>
          <img
            className={`HttpsAppLottiefilesComAnimation823179f10a0f490d851764d124e81fe0 h-[24px] ${className}`}
            src="/images/7-dots-rotate.svg"
          />
        </div>
      )}
    </div>
  );
};

export default SpinDotLoading;
