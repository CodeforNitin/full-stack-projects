import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from '../hooks/useAuthContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'


const WorkoutDetails = ({workout}) => {

    const { user } = useAuthContext()

    const { dispatch } = useWorkoutsContext();

    const handleDeleteClick = async () => {
        if(!user){
            return
          }

        const repsonse = await fetch('http://localhost:4000/api/workouts/' + workout._id, {
            method : 'DELETE',
            headers: {'Authorization': `Bearer ${user.token}`},
        })

        const json = await repsonse.json()

        if (repsonse.ok){
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }

    }
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p><strong>Weight: </strong>{workout.weight}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true})}</p>
            <span className='material-symbols-outlined' onClick={handleDeleteClick}>delete</span>
        </div>
    )
}

export default WorkoutDetails;