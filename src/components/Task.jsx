import {CloseCircleOutlined} from '@ant-design/icons';
// import reactDom from 'react-dom';
import {CrossIcon, TaskSpacing} from './ComponentStyle.jsx';

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <TaskSpacing>
                <h3>{task.text}</h3>
                <p>{task.day}</p>
            </TaskSpacing>
            <CrossIcon>
                <CloseCircleOutlined onClick={() => onDelete(task.id)} />
            </CrossIcon>
        </div>
    )
} 

export default Task