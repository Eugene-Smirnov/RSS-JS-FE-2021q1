import { FC } from 'react';
import './ModeSwitch.scss';

type ModeSwitchProps = {
  isGameMode: boolean;
  onChange: () => void;
};

export const ModeSwitch: FC<ModeSwitchProps> = ({ isGameMode, onChange }: ModeSwitchProps) => {
  return (
    <div className={`mode-switch_wrapper${isGameMode ? ' mode-switch__active' : ''}`}>
      <div className="mode-switch_train">train</div>
      <label className="mode-switch">
        <input id="check" onChange={onChange} type="checkbox" checked={isGameMode} />
        <span className="mode-switch_toggle"></span>
      </label>
      <div className="mode-switch_game">game</div>
    </div>
  );
};
