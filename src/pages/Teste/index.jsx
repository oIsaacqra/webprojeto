import React, { useState, useEffect } from 'react';
import './Teste.css';

const Teste = () => {
  // Variáveis de estado
  const [nav, setNav] = useState(0);
  const [events, setEvents] = useState(
    localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : []
  );
  const [clickedDate, setClickedDate] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [eventTitle, setEventTitle] = useState('');

  const weekdays = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];

  useEffect(() => {
    load();
  }, [nav, events]);

  const load = () => {
    const date = new Date();
    if (nav !== 0) {
      date.setMonth(date.getMonth() + nav);
    }

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1);
    const paddingDays = weekdays.indexOf(firstDayOfMonth.toLocaleDateString('pt-BR', { weekday: 'long' }));

    document.getElementById('monthDisplay').innerText = `${date.toLocaleDateString('pt-BR', { month: 'long' })}, ${year}`;
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = '';

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const dayDiv = document.createElement('div');
      dayDiv.classList.add('day');

      const dayString = `${month + 1}/${i - paddingDays}/${year}`;
      if (i > paddingDays) {
        dayDiv.innerText = i - paddingDays;

        if (i - paddingDays === day && nav === 0) {
          dayDiv.id = 'currentDay';
        }

        const eventDay = events.find(event => event.date === dayString);
        if (eventDay) {
          const eventDiv = document.createElement('div');
          eventDiv.classList.add('event');
          eventDiv.innerText = eventDay.title;
          dayDiv.appendChild(eventDiv);
        }

        dayDiv.addEventListener('click', () => openModal(dayString));
      } else {
        dayDiv.classList.add('padding');
      }

      calendar.appendChild(dayDiv);
    }
  };

  const openModal = (date) => {
    setClickedDate(date);
    const eventDay = events.find(event => event.date === date);
    if (eventDay) {
      setModalType('delete');
      setEventTitle(eventDay.title);
    } else {
      setModalType('new');
      setEventTitle('');
    }
    document.getElementById('modalBackDrop').style.display = 'block';
    document.getElementById(`${modalType}EventModal`).style.display = 'block';
  };

  const closeModal = () => {
    setClickedDate(null);
    setEventTitle('');
    setModalType(null);
    document.getElementById('modalBackDrop').style.display = 'none';
    document.getElementById('newEventModal').style.display = 'none';
    document.getElementById('deleteEventModal').style.display = 'none';
    load();
  };

  const saveEvent = () => {
    if (eventTitle) {
      const updatedEvents = [...events, { date: clickedDate, title: eventTitle }];
      setEvents(updatedEvents);
      localStorage.setItem('events', JSON.stringify(updatedEvents));
      closeModal();
    } else {
      alert('Por favor, insira um título para o evento.');
    }
  };

  const deleteEvent = () => {
    const updatedEvents = events.filter(event => event.date !== clickedDate);
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    closeModal();
  };

  return (
    <div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" />
      <div className="sidebar-cliente">
        <div className="logo-side-ige">
          <a href="/"><img src="./src/assets/logo_white-sf.png" id="img-side-cliente" alt="Logo" /></a>
        </div>
        <div className="side-cliente">
          <a href="/" className="nav__link">
            <div className="components-side-client">
              <i className="bi bi-house-door" id="icon-side-cliente"></i>
              <span className="nav__name">Home</span>
            </div>
          </a>
          <a href="/cliente" className="nav__link">
            <div className="components-side-client">
              <i className="bi bi-calendar-plus" id="icon-side-cliente"></i>
              <span className="nav__name">Agendar</span>
            </div>
          </a>
          <a href="#" className="nav__link">
            <div className="components-side-client">
              <i className="bi bi-calendar-check" id="icon-side-cliente"></i>
              <span className="nav__name">Meus Agendamentos</span>
            </div>
          </a>
        </div>
        <button className="btn-login-out-cliente">Login</button>
      </div>
      <div className="content-agendamentos">
      <h1 id="title-agendar-top">Agendar</h1>
        <div id="container">
          <div id="header">
            <div id="monthDisplay"></div>
            <div>
              <button onClick={() => setNav(nav - 1)}>Voltar</button>
              <button onClick={() => setNav(nav + 1)}>Próximo</button>
            </div>
          </div>
          <div id="weekdays">
            {weekdays.map((day, index) => <div key={index}>{day}</div>)}
          </div>
          <div id="calendar"></div>
        </div>

        <div id="newEventModal" style={{ display: 'none' }}>
          <h2>Novo Evento</h2>
          <input
            id="eventTitleInput"
            placeholder="Título do Evento"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
          />
          <button onClick={saveEvent} className='btn-card-event'>Salvar</button>
          <button onClick={closeModal} className='btn-card-event'>Cancelar</button>
        </div>

        <div id="deleteEventModal" style={{ display: 'none' }}>
          <h2>Evento</h2>
          <div id="eventText">{eventTitle}</div>
          <button onClick={deleteEvent}>Deletar</button>
          <button onClick={closeModal}>Fechar</button>
        </div>

        <div id="modalBackDrop" style={{ display: 'none' }} onClick={closeModal}></div>
      </div>
    </div>
  );
};

export default Teste;