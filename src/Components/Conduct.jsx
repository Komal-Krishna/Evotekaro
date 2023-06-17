import React,{useState} from "react";
import "./CSS/Conduct.css"
import Side from "./Side";
import { useForm } from "react-hook-form";
import axios, { Axios } from "axios";




function Conduct({onFormSwitch}) {

  const [value, setValue] = useState([]);
  const [showDescription, setShowDescription] = useState(false);
  const [state, setState] = useState({});
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [candidate, setCandidate] = useState([]);


  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };


  const AddBox = () => {
    setValue([...value, '']);
    console.log(value)
  };

  const removeBox = (i) => {
    const restValue = [...value];
    restValue.splice(i, 1);
    setValue(restValue);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      "id": 1,
      [name]: value,
      "electionId": 1,
    }));
  };


  const confirmChange = (e, i) => {
    console.log("Inside confirmChange")
    setCandidate([...candidate, state]);
    setState({ id: 1,name:"",electionId:1, manifesto:""});
    console.log("candidate:")
    console.log(candidate)
    console.log("state:")
    console.log(state)
  };

  var url = "http://127.0.0.1:8000/election/"

  const headers = {
    'accept': 'application/json',
    'Authorization': localStorage.getItem('SavedToken'),
    'Content-Type': 'application/json',
  };
  const [data, setData] = useState({
    electionName: "",
    year: "",
    branch: "",
    batch: "",
    candidate: "",
    rules: "",
    startTime: "",
    endTime: ""
  })
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    if (startTime && endTime) {
      const formattedStartTime = new Date(startTime).toISOString();
      const formattedEndTime = new Date(endTime).toISOString();

      axios.post("http://127.0.0.1:8000/election/", {
        "id": 1,
        name: data.electionName,
        startTime: formattedStartTime,
        endTime: formattedEndTime,
        rules: data.rules,
        candidates:  candidate 
        
      },
        { headers })
        .then(res => {
          console.log(res)
          if (res.request.staus == 200) {

          }
        })
    }
  }



  const [photo, setPhoto] = useState(null);


  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };


  // const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  //const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <div className='A'>
         <div className='side'>
         <Side change={onFormSwitch} ></Side>
        </div>
        <div>
        <div className="conduct">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="name-date">
            <div className="name-election">
              <label className="Head1">Name of the election : </label>
              <input className="tm1" type="text" name="electionName" {...register("electionName", { maxLength: 20 })} />
            </div>
            <div className="name-election">
              {/* <label className="Head1">Date : </label> */}
              {/* <input className="tm1" type="date" name="date" /> */}
            </div>
          </div>
          <div className="YBB">
            <div className="input-grp2">
              {" "}
              <label className="Head1">Year : </label>
              <select name="year" >
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </select>
            </div>

            <div className="input-grp2">
              {" "}
              <label className="Head1">Branch : </label>
              <input className="tm1" type="text" name="branch" />
            </div>
            <div className="input-grp2">
              {" "}
              <label className="Head1">Batch : </label>
              <input className="tm1" type="text" name="batch" />
            </div>
          </div>

          <div className="all-box">
            <label className="Head1">Add Candidates:</label>
            <div className="allBox">
              <div className="first-candi">
                {/* <input className="tm1" type="text" onChange={(e) => handleChange(e, 0)} />
                <input className="tm1" type="text" name="manifesto" /> */}
                <input className="tm1" type="text" name="name" value={state.name || ''} onChange={(e) => handleChange(e, 0)} />
                <input className="tm1" type="text" name="manifesto" value={state.manifesto || ''} onChange={(e) => handleChange(e, 0)} />

                
                <button onClick={(e) => confirmChange(e, 0)}>Confirm</button>

              </div>

              {value.map((data, i) => {
                if (i !== 0) {
                  return (
                    <div className="other-candi" key={i}>
                      {/* <input className="tm1" value={data} type="text" onChange={(e) => handleChange(e, i)} name="candidate" />
                      <input className="tm1" type="text" name="manifesto" /> */}
                      {/* <input className="tm1" type="text" name="candiadateName" value={state.candiadateName || ''} onChange={(e) => handleChange(e, i)} /> */}
                      <input
                        className="tm1"
                        type="text"
                        name={`name-${i}`}
                        value={state[`name-${i}`] || ''}
                        onChange={(e) => handleChange(e, i)}
                      />
                      <input
                        className="tm1"
                        type="text"
                        name={`manifesto-${i}`}
                        value={state[`manifesto-${i}`] || ''}
                        onChange={(e) => handleChange(e, i)}
                      />

                      {/* <input className="tm1" type="text" name="candidateManifesto" value={state.candidateManifesto || ''} onChange={(e) => handleChange(e, i)}/> */}
                      <button onClick={() => removeBox(i)}>X</button>
                      <button onClick={(e) => confirmChange(e, i)}>Confirm</button>
                    </div>
                  );
                }

              })}
              <button className="add-more" onClick={AddBox} name="Add" type="submit">
                Add More
              </button>
            </div>
          </div>

          <div className="textarea">
            <label className="Head1">Rules and regulations:</label>
            <textarea name="rules" id="rules" cols="100" rows="10" {...register("rules", { maxLength: 20 })}></textarea>
          </div>


            <div className="Stime2">
              <label className="Head1">Start time/Date:  </label>
              <input className="tm2" type="datetime-local" value={startTime} onChange={handleStartTimeChange} />
            </div>
            <div className="Stime2">
              <label className="Head1">End Time/Date:  </label>
              <input className="tm2" type="datetime-local" value={endTime} onChange={handleEndTimeChange} />
            </div>



          <button className="btn">Submit</button>
        </form>
      </div >
      </div>
      </div>
  );
}
export default Conduct;
