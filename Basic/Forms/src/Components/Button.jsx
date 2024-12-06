export default function Button(props){
    return <>
        <button className="rounded-md bg-slate-200 border-2 p-4 ">{props.children}</button>
    </>
}