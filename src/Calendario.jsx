import React, { useState } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "./page/components/calendario.css";
import eventosPadrao from './page/components/EventosPadrao';
import EventModal from './page/components/modalEvent/EventModal';
import AddEventos from './page/components/adicionar/AddEvento';
import CustomToolBar from './page/components/customCalendar/CustomToolBar';
import FiltroAtividades from './page/components/filtro/FiltroAtividades';
import Cabecalho from './layout/cabecalho';


const DragAndDropCalendar = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);


const Calendario = () => {

    const [eventos, setEventos] = useState(eventosPadrao);
    const [eventoSelecionado, setEventoSelecionado] = useState(null);
    const [eventosFiltrados, setEventosFiltrados] = useState(eventosPadrao)

    const eventStyle = (event) => ({
        style: {
            backgroundColor: event.color
        }
    })

    const moverEventos = (data) => {
        const {start, end} = data;
        const updateEvents = eventos.map((event) => {
            if (event.id === data.event.id) {
                return{
                    ...event,
                    start: new Date(start),
                    end: new Date(end)
                }
            }
            return event;
        })

        setEventos(updateEvents)
    }

    const handleEventClick = (evento) => {
        setEventoSelecionado(evento);
    }

    const handleEventClose = () => {
        setEventoSelecionado(null);
    }

    const handleAdicionar = (novoEvento) => {
        setEventos([...eventos, {...novoEvento, id:eventos.length + 1}]);
    }
    
    const handleEventDelete= (eventId) =>{
     
       const updatedEvents = eventos.filter((event) => event.id !== eventId)
       setEventos(updatedEvents);
       setEventoSelecionado(null);
   };



   const handleEventUpdate = (updatedEvent) =>{
       
       const updatedEvents = eventos.map((event) =>{
           if(event.id === updatedEvent.id){
               return updatedEvent;
           }
           return event;
       });
       setEventos(updatedEvents);
       setEventoSelecionado(null);
   }

   const handleSelecionarAtividades = (atividadesSelecionadas) => {
        setEventosFiltrados(atividadesSelecionadas)
   }

 
    return (
        <>
        <Cabecalho/>
        <div className='tela'>

                <div className='toolbar' style={{maxHeight: "100vh", overflowY: "auto"}}>
                    <AddEventos onAdicionar={handleAdicionar}/>
                    <FiltroAtividades atividades={eventos} onSelecionarAtividades={handleSelecionarAtividades}/>

                </div>

                
                <DragAndDropCalendar 
                    defaultDate={moment().toDate()}
                    defaultView='month'
                    events={eventosFiltrados}
                    localizer={localizer}
                    resizable
                    onEventDrop={moverEventos}
                    onEventResize={moverEventos}
                    onSelectEvent={handleEventClick}
                    eventPropGetter={eventStyle}
                    components={{
                        toolbar: CustomToolBar,
                    }}
                    className='calendar'
                
                />

                {eventoSelecionado && (
                    <EventModal
                        evento={eventoSelecionado}
                        onClose={handleEventClose}
                        onDelete={handleEventDelete}
                        onUpdate={handleEventUpdate}  
                    />
                )}
        </div>
       </>
    )
}



export default Calendario;