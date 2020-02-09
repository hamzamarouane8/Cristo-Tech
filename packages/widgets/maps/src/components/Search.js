import styled from "styled-components";
import _ from 'lodash'
import faker from 'faker'
import React, { Component ,useState,useEffect} from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'



export default class extends React.Component {

  constructor(props) {
    super(props);
  }
  state = {
    data:[],

  }
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect (e, { result , key }) {
    this.props.handleSelectMarker(result)
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })
    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')

      const isMatch = result => re.test(result.title)
      this.setState({
        isLoading: false,
        results: _.filter(this.props.data, isMatch),
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state
    return (
      <Grid>
        <Grid.Column  width={8}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect.bind(this)}
            onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
            results={results}
            value={value}
          />
        </Grid.Column>

      </Grid>
    )
  }
}

/*export default({data})=>{
  const [list ,setList] = useState([]);
  const[isLoading,setIsLoading] = useState(false);
  const[results,setResults] = useState([]);
  const[val,setVal] = useState('');

  useEffect(() => {
    resetComponent()
  }, []);


  function resetComponent(){
    setIsLoading(false);
    setResults([]);
    setVal('');
  }


  function handleSearchChange(e, { value }){
    setIsLoading(true);
    setVal(value)
    setTimeout(() => {
      if (val.length < 1) return resetComponent()
      const re = new RegExp(_.escapeRegExp(val), 'i')
      const isMatch = result => re.test(result.title)
      setIsLoading(false);
      setResults(_.filter(data, isMatch))
    }, 300)
  }

  return(
    <Grid>
      <Grid.Column  width={8}>
        <Search
          loading={isLoading}
          //onResultSelect={this.handleResultSelect.bind(this)}
          onSearchChange={_.debounce(handleSearchChange, 500, { leading: true })}
          results={results}
          value={val}
        />
      </Grid.Column>

    </Grid>
  )
}
*/
const SearchStyle = styled.div`
  .ui.search{
  float:right;
    margin-top:20px
    }
`
