export class Student{
  name : string;
  lateCount : number;
  absentCount : number;
  status : string;
  lateExpanded : boolean;
  absentExpanded : boolean;
  lateStamps = [];
  absentStamps = [];
  initAbsentCount : number;
  initLateCount : number;

  toggleLateExpanded()
  {
    this.lateExpanded = !(this.lateExpanded);
  }

  toggleAbsentExpanded()
  {
    this.absentExpanded = !(this.absentExpanded);
  }

  setHere()
  {
    this.status = 'here';
  }

  setUnchecked()
  {
    this.status = 'unchecked';
    this.lateCount = this.initLateCount;
    this.absentCount = this.initAbsentCount;
  }

  disable()
  {
    return this.status != 'unchecked';
  }

  getDisabledClass()
  {
   return this.disable() ? 'disabled' : '';
  }

  setLate()
  {
    this.lateCount++;
    this.status = 'late';
    this.lateStamps.push(new Date())
  }

  setAbsent()
  {
    this.absentCount++;
    this.status = 'absent';
    this.absentStamps.push(new Date())
  }

  getStatusClass()
  {
    switch(this.status)
    {
      case 'unchecked':
        return '';
      case 'here':
       return 'success';
       case 'late':
       return 'warning'
       case 'absent':
       return 'danger';
    }
    return '';
  }

  constructor(studentName : string, initLateCount: number, initAbsentCount : number){
    this.name = studentName;
    this.initLateCount = initLateCount;
    this.lateCount = initLateCount;
    this.initAbsentCount = initAbsentCount;
    this.absentCount = initAbsentCount;
    this.status = 'unchecked';
  }
}
