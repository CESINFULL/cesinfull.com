import { FC } from 'react';

export interface AvatarProps {
  img: string;
  speaker: string;
  job: string;
  enterprise: string;
}

const Avatar: FC<AvatarProps> = ({ img, enterprise, job, speaker }) => {
  return (
    <section className="flex items-center gap-4">
      <img className="w-10 h-10 rounded-full object-cover" src={img}></img>
      <div className="space-y-1 font-medium dark:text-white">
        <p className="font-semibold">{speaker}</p>
        <small className="text-sm font-semibold text-gray-500 dark:text-gray-400">
          {job}
          {enterprise && ` en ${enterprise}`}
        </small>
      </div>
    </section>
  );
};

export default Avatar;
