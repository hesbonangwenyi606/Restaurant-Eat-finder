import React, { useState } from 'react';
import { X, Calendar, Clock, Users } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  restaurantName: string;
  onConfirm: (details: { date: string; time: string; guests: number; name: string; email: string; phone: string }) => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose, restaurantName, onConfirm }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (date && time && name && email && phone) {
      onConfirm({ date, time, guests, name, email, phone });
      setDate('');
      setTime('');
      setGuests(2);
      setName('');
      setEmail('');
      setPhone('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#2C2C2C]">Reserve a Table</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>
        <p className="text-gray-600 mb-6">at {restaurantName}</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold mb-2">
              <Calendar className="w-4 h-4" /> Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 focus:border-[#8B1538] outline-none"
            />
          </div>
          
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold mb-2">
              <Clock className="w-4 h-4" /> Time
            </label>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 focus:border-[#8B1538] outline-none"
            >
              <option value="">Select time</option>
              <option value="5:00 PM">5:00 PM</option>
              <option value="5:30 PM">5:30 PM</option>
              <option value="6:00 PM">6:00 PM</option>
              <option value="6:30 PM">6:30 PM</option>
              <option value="7:00 PM">7:00 PM</option>
              <option value="7:30 PM">7:30 PM</option>
              <option value="8:00 PM">8:00 PM</option>
              <option value="8:30 PM">8:30 PM</option>
              <option value="9:00 PM">9:00 PM</option>
            </select>
          </div>
          
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold mb-2">
              <Users className="w-4 h-4" /> Number of Guests
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 focus:border-[#8B1538] outline-none"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold mb-2 block">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 focus:border-[#8B1538] outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-semibold mb-2 block">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 focus:border-[#8B1538] outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-semibold mb-2 block">Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 focus:border-[#8B1538] outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#8B1538] text-white py-3 rounded-lg font-semibold hover:bg-[#6B1028] transition-colors"
          >
            Confirm Reservation
          </button>
        </form>
      </div>
    </div>
  );
};
