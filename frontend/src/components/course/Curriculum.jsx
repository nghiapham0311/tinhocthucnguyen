import { useState } from 'react';
import SectionHeading from '../SectionHeading.jsx';

export default function Curriculum({ course }) {
  const groups = course.curriculum;
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState(0);
  const modules = groups[tab].modules;

  const selectTab = (i) => {
    setTab(i);
    setOpen(0);
  };

  return (
    <section className="section section--tint" id="noi-dung">
      <div className="container">
        <SectionHeading
          no="03"
          title="Nội dung chương trình"
          sub={groups.length > 1 ? 'Chọn lộ trình để xem chi tiết từng phần.' : `${modules.length} phần học, đi từ nền tảng đến sản phẩm.`}
        />

        {groups.length > 1 && (
          <div className="tabs" role="tablist">
            {groups.map((g, i) => (
              <button
                key={g.name}
                role="tab"
                aria-selected={tab === i}
                className={tab === i ? 'is-active' : ''}
                onClick={() => selectTab(i)}
              >
                {g.name}
                <small>{g.modules.length} phần</small>
              </button>
            ))}
          </div>
        )}

        <ol className="modules" key={tab}>
          {modules.map((m, i) => {
            const isOpen = open === i;
            return (
              <li key={m.title} className={`module ${isOpen ? 'is-open' : ''}`}>
                <button className="module__head" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                  <span className="module__no">{String(i + 1).padStart(2, '0')}</span>
                  <span className="module__title">{m.title}</span>
                  <span className="module__count">{m.items.length} nội dung</span>
                  <span className="module__chevron" aria-hidden="true" />
                </button>
                <div className="module__body">
                  <ul>
                    {m.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
