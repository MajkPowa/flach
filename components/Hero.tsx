import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Check, MapPin, Pause, Play } from 'lucide-react';
interface Props { onOpenConfigurator: () => void; }
export const Hero: React.FC<Props> = ({ onOpenConfigurator }) => {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const base = import.meta.env.BASE_URL;
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => { if (query.matches) video.current?.pause(); else video.current?.play().catch(() => setPlaying(false)); };
    sync(); query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);
  const toggleVideo = () => { if (playing) video.current?.pause(); else video.current?.play().catch(() => setPlaying(false)); };
  return (
    <section className="hero site-wrap" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span /> KOUPELNY NA KLÍČ · LITOMYŠL</p>
        <h1 id="hero-title">Koupelna,<br />ve které je<br /><span>vám dobře.</span></h1>
        <p className="hero-description">Od prvního nápadu přes 3D návrh až po hotovou koupelnu. Proměníme vaše představy v prostor pro každý den.</p>
        <div className="hero-actions"><button className="button button-red" onClick={onOpenConfigurator}>Poptat svou koupelnu <ArrowUpRight size={20} aria-hidden="true" /></button><a className="text-link" href="#home/work">Prohlédnout realizace <ArrowDown size={17} aria-hidden="true" /></a></div>
        <div className="hero-note"><Check size={16} aria-hidden="true" /><span>Nezávazně. Probereme možnosti i váš rozpočet.</span></div>
        <div className="hero-foot"><span className="hero-foot-number">2006</span><span>Od návrhů koupelen<br />k hotovým domovům.</span></div>
      </div>
      <div className="hero-media">
        <video ref={video} src={`${base}media/flach-atmosphere.mp4`} poster={`${base}media/flach-bathroom-poster.webp`} muted loop playsInline preload="metadata" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} aria-label="Atmosféra koupelen a bydlení FLACH" />
        <div className="hero-media-top"><span><MapPin size={14} aria-hidden="true" /> Litomyšl a okolí</span><button className="video-toggle" onClick={toggleVideo} aria-label={playing ? 'Pozastavit video' : 'Přehrát video'}>{playing ? <Pause size={17} /> : <Play size={17} />}</button></div>
        <div className="hero-media-bottom"><div><span className="media-caption">PROSTOR PRO VAŠE PŘEDSTAVY</span><p>Promyšlené od prvního detailu.</p><span className="media-note">Vizuální inspirace</span></div><a href="#bathrooms" aria-label="Více o koupelnách na klíč"><ArrowUpRight size={25} aria-hidden="true" /></a></div>
      </div>
    </section>
  );
};
