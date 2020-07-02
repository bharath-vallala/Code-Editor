import React from "react"
import AceEditor from "react-ace";
import {Button, Container, Row, Col,Form,ProgressBar,Card} from "react-bootstrap"
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/snippets/java"
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/snippets/java";

 import {compileCode,getOutput} from "./axios/apiRequests"




class JavaEditor extends React.Component{

  constructor(props){
    super(props)
    this.state={code:"class HelloWorld { \n public static void main(String[] args) { \n System.out.println(\"Hello, World!\"); \n } \n} \n",token:null,progress:false,output:""}
  }


     onChange=(newValue)=>{
       var vll=newValue;
        console.log(vll)

       
        
       this.setState({code:vll})
      }


      onCodeSubmit=(e)=>{
        
        this.setState({progress:true})

        console.log("hello")
       let response=compileCode(this.state.code,62); 
       console.log(response)
       response.then((data)=>{
        this.setState({token:data.data.token})
        console.log(this.state.token)

        setTimeout(()=>{ 
          console.log("im running")
          let response=getOutput(this.state.token);
          response.then((data)=>{
            if(data.data.stdout==null){
              this.setState({output:data.data.stderr})


            }else{
              this.setState({output:data.data.stdout})
            }
            console.log(this.state.output);
            console.log(data.data);
            this.setState({progress:false})

          })
          }, 5000);
  
  
         
       })


      }

      

      progressBar=()=>{
        if(this.state.progress===true){

        
        return(
          <ProgressBar animated now={90} />
        )
        }
      }


    render(){
      return (
        <div>

          <Row>
            <Col>
           
              <Card>
                <Card.Body>
              <AceEditor
                mode="java"
                theme="xcode"
                value={this.state.code}
                onChange={this.onChange}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
                enableBasicAutocompletion={true}
                enableLiveAutocompletion={true}
                enableSnippets={true}

              />

              </Card.Body>
              <Button onClick={this.onCodeSubmit}>submit code</Button>

              </Card>
          

            </Col>
            <Card>
                
            <Col>
              <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User Input</Form.Label>
                  <Form.Control type="text" as="textarea" rows="2" placeholder="Enter input" />
                  <Form.Text className="text-muted">
                     only enter here if your program require input
                  </Form.Text>
                </Form.Group>
              </Form>
            </Col>
            
            </Card>
            

          </Row>
          <Card>
          <Col>
          <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Program OutPut java</Form.Label>
                  <Form.Control type="text" as="textarea" value={this.state.output} rows="3" placeholder="OutPut" readOnly />
                  <Form.Text className="text-muted">
                    Program output will be displayed here
                  </Form.Text>
                </Form.Group>
              </Form>

              <div>
                {this.progressBar()}
              </div>

          </Col>
          </Card>

        </div>
        );
    }



}
export default JavaEditor
