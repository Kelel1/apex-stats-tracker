import React from 'react'

const Form = () => {

  const formStyle = {
 
    paddingBottom: '20px',
    border: 'solid',
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 300,
    marginLeft: 250,
    marginRight: 700,
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
        <label for="platform">Platform</label>
          <div>
            <select>
              <option value="psn">Playstation</option>
              <option value="xbl">Xbox</option>
              <option value="Origin">Origin</option>
            </select>
          </div>
          <label for="gamertag">Gamertag</label>
          <div>            
            <input type="text" name="text" id="gamertag" size="40"
                   placeholder="Origin ID, Xbox Live ID, PSN ID"></input>
          </div>
        </form>
      </div>
    
  )
}

export default Form