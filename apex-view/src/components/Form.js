import React from 'react'

const Form = () => {

  const formStyle = {
 
    paddingBottom: '20px',
    border: 'solid',
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 225,
    marginLeft: 225,
    marginRight: 675,
    paddingLeft: 25,
    paddingTop: 20,
    backgroundColor: 'hsl(264, 7%, 87%, 0.5)',
    
  }

  return (
  
      <div className="platform">
        <form style={ formStyle }>
        <div>
          Track Player Stats
        </div>
        <br/>
        <label for="platform">Platform</label>
          <div>
            <select className="select">
              <option value="psn">Playstation</option>
              <option value="xbl">Xbox</option>
              <option value="Origin">Origin</option>
            </select>
          </div>
          <br/>
          <label for="gamertag">Gamertag</label>
          <div>            
            <input type="text" name="text" id="gamertag" size="46"
                   placeholder="Origin ID, Xbox Live ID, PSN ID"></input>
          </div>
          <br/>
          <div>
            <button className="submit">submit</button>
          </div>
        </form>
      </div>
    
  )
}

export default Form