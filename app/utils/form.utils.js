(function() {
    "use strict";
    var React = require("react");
     
    
    module.exports = {
        /**
         * Render the input text field
         * @param   {String} id    ref id to the element
         * @param   {String} label Label message to show for the field
         * @returns {JSX}    JSX template for input field
         */
        renderTextInput: function(id, label) {
            return this.renderField(id, label,
                <input type="text" className="form-control" id={id} ref={id}/>
            )
        }
         /**
         * Render the input password field with masked
         * @param   {String} id    ref id to the element
         * @param   {String} label Label message to show for the field
         * @returns {JSX}    JSX template for input field
         */
        , renderPasswordInput: function(id, label) {
            return this.renderField(id, label,
                <input type="password" className="form-control" id={id} ref={id}/>
            )
        }
         /**
         * Render the input textarea field
         * @param   {String} id    ref id to the element
         * @param   {String} label Label message to show for the field
         * @returns {JSX}    JSX template for input field
         */
        , renderTextarea: function(id, label) {
            return this.renderField(id, label,
              <textarea className="form-control" id={id} ref={id}/>
            )
          }

         /**
         * Render the input select field
         * @param   {String} id    ref id to the element
         * @param   {String} label Label message to show for the field
         * @param   {Array}  Data  Source
         * @returns {JSX}    JSX template for input field
         */
        , renderSelect: function(id, label, values) {
            var options = values.map(function(value) {
              return <option value={value}>{value}</option>
            })
            return this.renderField(id, label,
              <select className="form-control" id={id} ref={id}>
                {options}
              </select>
            )
          }
         /**
         * Render the input radio buttons field
         * @param   {String} id    ref id to the element
         * @param   {String} label Label message to show for the field
         * @param   {Array}  kwargs  Source
         * @returns {JSX}    JSX template for input field
         */
        , renderRadioInlines: function(id, label, kwargs) {
            var radios = kwargs.values.map(function(value) {
              var defaultChecked = (value == kwargs.defaultCheckedValue)
              return <label className="radio-inline">
                <input type="radio" ref={id + value} name={id} value={value} defaultChecked={defaultChecked}/>
                {value}
              </label>
            })
            return this.renderField(id, label, radios)
          },
        /**
         * Render the input field within a form-group
         * @param   {String} id    ref id to the element
         * @param   {String} label Label message to show for the field
         * @param   {JSX}    field JSX returned template
         * @returns {JSX}    JSX template for input field
         */
        renderField: function(id, label, field) {
                    return (
                            <div className='form-group'>
                                <label htmlFor={id} className="col-sm-4 control-label">{label}</label>
                                <div className="col-sm-8">
                                    {field}
                                    <p ref={id+"-error"} className="error-message"></p>
                                </div>
                            
                            </div>
                        );
                }

    }
})();