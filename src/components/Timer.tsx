interface Props {
  time: number;
}

export default function Timer({ time }: Props) {
  return (
    <div className="timer">
      <span className="digits">
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
      </span>
      <span className="digits milli-sec">
        {("0" + Math.floor((time / 10) % 100)).slice(-2)}
      </span>
    </div>
  );
}
