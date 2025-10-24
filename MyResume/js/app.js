import ResumeData from './data.js';

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

function render() {
  const root = document.getElementById('resume');
  if (!root) return;

  // Header
  const header = el('section', 'card header');
  const left = document.createElement('div');
  left.appendChild(el('div', 'name', ResumeData.personal.name));
  left.appendChild(el('div', 'title', ResumeData.personal.title));
  header.appendChild(left);

  const contact = el('div', 'contact');
  const email = el('a', '', ResumeData.personal.email);
  email.href = `mailto:${ResumeData.personal.email}`;
  const phone = el('a', '', ResumeData.personal.phNbr);
  phone.href = `tel:${ResumeData.personal.phNbr}`;
  contact.appendChild(email);
  contact.appendChild(phone);
  contact.appendChild(el('div', 'small', `${ResumeData.personal.city}, ${ResumeData.personal.country}`));
  header.appendChild(contact);
  root.appendChild(header);

  const cols = el('div', 'columns');

  const main = document.createElement('div');

  const expCard = el('section', 'card');
  expCard.appendChild(el('div', 'section-title', 'Experience'));
  (ResumeData.experience || []).forEach(exp => {
    const item = el('div', 'exp-item');
    item.appendChild(el('div', 'badge', `${exp.company} — ${exp.location}`));
    item.appendChild(el('div', 'exp-meta', `${exp.period} • ${exp.country}`));
    const ul = el('ul', 'list');
    (exp.responsibilities || []).forEach(r => ul.appendChild(el('li', 'small', r)));
    item.appendChild(ul);
    expCard.appendChild(item);
  });
  main.appendChild(expCard);

  const eduCard = el('section', 'card');
  eduCard.appendChild(el('div', 'section-title', 'Education'));
  (ResumeData.education || []).forEach(ed => {
    const item = el('div', 'exp-item');
    item.appendChild(el('div', 'badge', ed.school));
    item.appendChild(el('div', 'exp-meta', `${ed.period} • ${ed.location}`));
    item.appendChild(el('div', 'small', `${ed.grade} — ${ed.field}`));
    if (ed.thesis) item.appendChild(el('div', 'small', `Thesis: ${ed.thesis}`));
    if (ed.projects) item.appendChild(el('div', 'small', `Projects: ${ed.projects}`));
    eduCard.appendChild(item);
  });
  main.appendChild(eduCard);

  cols.appendChild(main);
  const side = document.createElement('aside');

  const skillsCard = el('section', 'card');
  skillsCard.appendChild(el('div', 'section-title', 'Skills'));
  (ResumeData.skills || []).forEach(s => {
    const wrap = el('div', 'skill-item');
    wrap.appendChild(el('div', 'skill-field', s.field));
    if (Array.isArray(s.skill)) {
      const ul = el('ul', 'list');
      s.skill.forEach(it => ul.appendChild(el('li', 'small', it)));
      wrap.appendChild(ul);
    } else {
      wrap.appendChild(el('div', 'small', s.skill));
    }
    skillsCard.appendChild(wrap);
  });
  side.appendChild(skillsCard);

  const certCard = el('section', 'card');
  certCard.appendChild(el('div', 'section-title', 'Certifications'));
  const certUl = el('ul', 'list');
  (ResumeData.professionalCertifications || []).forEach(c => certUl.appendChild(el('li', 'small', c)));
  certCard.appendChild(certUl);
  side.appendChild(certCard);

  cols.appendChild(side);
  root.appendChild(cols);

  root.appendChild(el('div', 'footer-note', 'Generated from data.js'));
}

document.addEventListener('DOMContentLoaded', render);
