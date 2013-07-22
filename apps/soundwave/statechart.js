Soundwave.statechart = SC.Statechart.create({
  initialState: 'applicationState',         
  
  applicationState: SC.State.plugin('Soundwave.ApplicationState')
  
});