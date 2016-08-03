import React, {Component} from 'react';

class Repo extends Component {  

  render() {

      const {repo} = this.props;

    return (
        <div>

            <li className="list-group-item">
                <div className="row">
                    <div className="col-md-12">

                <div className="row">
                    <div className="col-md-9">
                                    
                            <h4><a href="{repo.html_url}" target="_blank">{repo.name}</a></h4> 
                            <p>{repo.description}</p>
                        
                    </div>
                    <div className="col-md-3">
                        <span className="label label-primary"> Watchers</span>
                        <span className="label label-success"> Forks</span>
                    </div>
                </div>

                    </div>
                </div>
            </li>

        </div>                
    )
  }

}

export default Repo
