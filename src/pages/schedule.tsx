import Header from '../components/Header';
import ScheduleForm from '../components/ScheduleForm';

const Schedule: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="p-8">
                <h2 className="text-xl mb-4">Manage Your Schedule</h2>
                <ScheduleForm />
                {/* Display schedule items here */}
            </main>
        </div>
    );
};

export default Schedule;
