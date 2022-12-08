import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setSelectedCourses } from '../../Redux/Actions/courses-action';
import ConfirmationPage from '../../Components/Confirmation-page/confirmation-page';
import Button from '../../Components/Button/button';
import Dropdown from '../../Components/Dropdown/dropdown';
import picApply from './Pic.svg';
import './apply-page.css';
import applyRequest from '../../Request/apply-request';

const ApplyPage = () => {

    const data = useSelector(state => state.courses);
    const dispatch = useDispatch();
    const [confirm, setConfirm] = useState(false);
    const [course, setCourse] = useState(useSelector(state => state.courses.selectedCourse));
    const [group, setGroup] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        if (course) {
            selectCourse(course);
        }
    }, [course])

    const setDataToState = (e) => {
        switch (e.target.name) {
            case 'course':
                setCourse(e.target.value);
                break;
            case 'group':
                setGroup(e.target.value);
                break;
            case 'fullName':
                setName(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'phone':
                let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
                const value = !x[2] ? x[1] : '(' + x[1] + ')' + x[2] + (x[3] ? '-' + x[3] : '') + (x[4] ? '-' + x[4] : '');
                setPhone(value);
                break;
            default:
                break;
        }
    }

    const checkValid = () => {
        let checkPhone = false;
        const phoneRegex = /^\(?([0-9]{3})\)([0-9]{3})[-]?([0-9]{2})[-]?([0-9]{2})$/;

        let checkEmail = false;
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

        if (emailRegex.test(email)) {
            checkEmail = true;
        }

        if (phoneRegex.test(phone)) {
            checkPhone = true;
        }

        if (course && group && name.length >= 3 && checkEmail && checkPhone) {
            return false;
        }

        return true;
    }

    const selectCourse = (singleCourse) => {
        const dropdownGroups = singleCourse.groups.map(el => {
            el['value'] = `${el.days} ${el.time} ${el.mode}`
            return el;
        })
        setGroups(dropdownGroups);
    }

    const submit = (event) => {
        const userData = {
            courseId: course.id,
            groupId: group.id,
            full_name: name,
            email: email,
            phone: phone
        };
        setConfirm(true);
        dispatch(setSelectedCourses(null));
        applyRequest(userData);
        event.preventDefault();
    }

    return (
        <>
            {confirm ? <ConfirmationPage /> :
                <div className="apply-page">

                    <div className="apply-form-block">
                        <h1>Apply to desired course right away!</h1>
                        <p className="apply-text general-text">Select desired course and group, leave us your contact information
                            and we’ll reach out to you for confirmation and letting you know about further steps.</p>
                        
                        <form>
                            <div className="space">
                                <div className="form-content">
                                    <h5>Course</h5>
                                    <Dropdown
                                        defaultValue={course}
                                        name="course"
                                        keyValue='name'
                                        value={data.courses}
                                        onChange={(el) => { setCourse(el) }}
                                    />
                                </div>
                                <div className="form-content">
                                    <h5>Group</h5>
                                    <Dropdown
                                        keyValue='value'
                                        disabled={!course}
                                        name="group"
                                        value={groups}
                                        onChange={(el) => setGroup(el)}
                                    />
                                </div>
                            </div>
                            <div className="space">
                                <div className="form-content">
                                    <h5>Full name</h5>
                                    <input
                                        className="general-text inputs"
                                        minLength='3'
                                        name="fullName"
                                        type='text'
                                        onChange={setDataToState}
                                    />
                                </div>
                                <div className="form-content">
                                    <h5>E-mail</h5>
                                    <input
                                        className="general-text inputs"
                                        placeholder="email@email.com"
                                        value={email}
                                        name="email"
                                        type='text'
                                        onChange={setDataToState}
                                    />
                                </div>
                                <div className="form-content">
                                    <h5>Phone number</h5>
                                    <input
                                        className="general-text inputs"
                                        name="phone"
                                        value={phone}
                                        placeholder="(___)___-__-__"
                                        type="text"
                                        onChange={setDataToState}
                                    />
                                </div>
                            </div>
                            <Button 
                                text='Apply'
                                color='green'
                                className='btn-subscribe-size'
                                onClick={submit}
                                castomClassName={checkValid() && "disabled"}
                                disabled={checkValid()}
                            />
                            
                        </form>
                    </div>


                    <div className='apply-img-block'>
                        <img src={picApply} alt="Picture of palette" />
                    </div>
                </div>
            }
        </>
    );
};

export default ApplyPage;
