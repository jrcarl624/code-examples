// not sure what to type the args so I left it any for now
type requirement = (...args: any[]) => {error:boolean, errorMessage?:string}
interface options {
    requirements: requirement[]
}

const exampleReqirement:requirement = (string) => {
    if (string == "foo") return {error:false}   
    return {error:true, errorMessage:"String Does not equal bar" }

}

const options:options = {
    requirements:[exampleReqirement("baz")] 
}

// The part where the command is run, I just have it contained in this function for now
const requirementExample = (options) => {

    let errorMessage

    for (let i of options.requirements){
        if (i.errorMessage) errorMessage += i.errorMessage
    }

    if (errorMessage) return "error to player"
    return 'to next step of the command execution'
}

console.log( requirementExample(options) )

// The only issue is passing the Player class to exampleReqirement("baz") which is contained in the requirements array



