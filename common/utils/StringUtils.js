	
const utils={
	hashText(s){
		if(s==null || typeof(s)!="string" || s.length==0)
			return false;
		for(let i=0;i<s.length;i++){
			let c=s.charAt(i);
			if(c!=' ' || c!='\t')
				return true;
		}
		return false;
	}
}
export default utils