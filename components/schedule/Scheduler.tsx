import { useState } from 'react';
import { addMinutes, format } from 'date-fns';

function generateTimeSlots(date: Date) {
  const slots: Date[] = [];
  const start = new Date(date);
  start.setHours(9, 0, 0, 0);
  const end = new Date(date);
  end.setHours(17, 0, 0, 0);
  let current = start;
  while (current < end) {
    slots.push(new Date(current));
    current = addMinutes(current, 30);
  }
  return slots;
}

export function Scheduler() {
  const [dateStr, setDateStr] = useState<string>(() => format(new Date(), 'yyyy-MM-dd'));
  const [selected, setSelected] = useState<Date | null>(null);
  const date = new Date(dateStr);
  const slots = generateTimeSlots(date);

  return (
    <section id="schedule" className="section container">
      <h2 className="text-3xl font-bold mb-6">Agendar cita</h2>
      <div className="flex gap-4 items-center mb-6">
        <label className="text-sm opacity-80">Fecha</label>
        <input
          type="date"
          value={dateStr}
          onChange={(e) => setDateStr(e.target.value)}
          className="bg-transparent border border-white/20 rounded px-3 py-2"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {slots.map((s) => {
          const time = format(s, 'HH:mm');
          const isSelected = selected && format(selected, 'HH:mm') === time;
          return (
            <button
              key={time}
              onClick={() => setSelected(s)}
              className={`px-3 py-2 rounded border ${isSelected ? 'bg-primary text-black border-primary' : 'border-white/20 hover:border-white/40'}`}
            >
              {time}
            </button>
          );
        })}
      </div>
      {selected && (
        <p className="mt-4">Seleccionaste: <span className="font-semibold">{format(selected, 'PPPP p')}</span></p>
      )}
    </section>
  );
}
