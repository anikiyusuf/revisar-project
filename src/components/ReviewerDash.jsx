import Frame2 from "../assets/Frame 2.png"
import Ellipse from "../assets/Ellipse 13.png"
import Arrow from "../assets/Arrow - Down 2.png"
import Frame1434 from "../assets/Frame 1434.png"
import Rectangle from "../assets/Rectangle 13.png"

export default function ReviewerDash() {
  return (
    <>
    <div className="AuthorDash">
       <div className="flex  ml-10 w-[1260px] h-86 p-10 justify-between items-center flex-shrink-0 rounded-8 bg-[#F5EEE0] backdrop-filter backdrop-blur-lg">
              <div className="logo mr-4">
                <img src={Frame2} alt="logo"/>
                </div>
                <div className="flex  ml-20 gap-3">
                    <div className="p-1 w-8 h-8 items-center mt-1 rounded-4 border border-gray-300">
   <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M18.7071 8.79633C18.7071 10.0523 19.039 10.7925 19.7695 11.6456C20.3231 12.2741 20.5 13.0808 20.5 13.956C20.5 14.8302 20.2128 15.6601 19.6373 16.3339C18.884 17.1417 17.8215 17.6573 16.7372 17.747C15.1659 17.8809 13.5937 17.9937 12.0005 17.9937C10.4063 17.9937 8.83505 17.9263 7.26375 17.747C6.17846 17.6573 5.11602 17.1417 4.36367 16.3339C3.78822 15.6601 3.5 14.8302 3.5 13.956C3.5 13.0808 3.6779 12.2741 4.23049 11.6456C4.98384 10.7925 5.29392 10.0523 5.29392 8.79633V8.3703C5.29392 6.68834 5.71333 5.58852 6.577 4.51186C7.86106 2.9417 9.91935 2 11.9558 2H12.0452C14.1254 2 16.2502 2.98702 17.5125 4.62466C18.3314 5.67916 18.7071 6.73265 18.7071 8.3703V8.79633ZM9.07367 20.0608C9.07367 19.5573 9.53582 19.3266 9.96318 19.2279C10.4631 19.1222 13.5093 19.1222 14.0092 19.2279C14.4366 19.3266 14.8987 19.5573 14.8987 20.0608C14.8738 20.5402 14.5926 20.9653 14.204 21.2352C13.7001 21.628 13.1088 21.8767 12.4906 21.9664C12.1487 22.0107 11.8128 22.0117 11.4828 21.9664C10.8636 21.8767 10.2723 21.628 9.76938 21.2342C9.37978 20.9653 9.09852 20.5402 9.07367 20.0608Z" fill="#171A1F" />
</svg>
<div className="absolute z-20 -mt-6 ml-3">
<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
<circle cx="5" cy="5" r="4.5" fill="#D3455B" stroke="#F5EEE0"/>
</svg>
</div>
</div>
      <div className="flex h-5 p-6 pl-12 pr-32 items-center gap-8 border-l border-gray-300"> 
        <img src={Ellipse} alt="ellipse"/>
        <div>
        <p>Eirene Oyakhilome</p>
        <p>Reviewer</p>
        </div>
        <img src={Arrow} alt="arrow"/>
   </div>
                </div>  
      </div>

    <section className="">
           <div className="flex flex-col items-start ml-20 gap-4">
                <div className="text-gray-900  text-2xl font-bold leading-normal">Welcome back, Eirene</div>
                 <p className="text-gray-700  text-base font-medium leading-6">Welcome to your dashboard. Create, manage, and share your manuscripts for review from your peers</p>
                </div>

                <div className="flex items-center w-[1300px]  justify-center h-[200px]">
          <div className="flex gap-40 items-center justify-between ">
        <div className="flex gap-4 mr-10 items-center">
        <img src={Frame1434} alt="" />
        <div className="flex flex-col items-start gap-4">
            <p className="">Miss. Eirene Oyakhilome</p>
            <p className="">Computer Science | Science</p>
        </div>
         <div className="flex p-2 items-start space-y-2 rounded-full border border-gray-300">
            <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-2 p-2">
                <p>Approved</p>
                <p>34</p>
            </div>
            <img src={Rectangle} alt="" />
            <div className=" flex flex-col items-center gap-2 ">
                <p>Decline</p>
                <p>2</p>
            </div>
            <img src={Rectangle} alt="" />
            <div className="flex flex-col items-center gap-2">
                <p>In-review</p>
                <p>2</p>
            </div>
            </div>
         </div>
        </div>
        <button className="text-white ml-20 inline-flex h-4 px-10 py-6 justify-center items-center gap-8 flex-shrink-0 rounded-md bg-red-500">+ Submit New Mauscript</button>
     </div>
     </div>
    </section>

      <div className="flex items-center justify-center h-[500px]">
    <div className="bg-white  w-[1100px] p-4 items-center justify-center">
        <div>
            <p> Pending Review </p>
            <p>lorem ipsum dolor sit amet</p>
        </div>
{/* Table contenth */}
<div className="">
<table  className="table-fixed w-full">
  <tr className="border-b gap-5 border-gray-300 text-left px-8 py-4">
    <th className="flex"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="15" height="15" rx="1.5" stroke="#E9E9EA"/>
</svg>
<span>Journal ID</span></th>
    <th>Article/Paper</th>
    <th>Author</th>
    <th>Date</th>
    <th>Action</th>
  </tr>
  <tr className="border-b gap-5 border-gray-300 text-left px-8 py-4">
  <td  className=""><svg  className="inline-block" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="15" height="15" rx="1.5" stroke="#E9E9EA"/>
</svg>
23456789</td>
    <td className="flex">     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M8.26702 14.68C8.08302 14.68 7.95902 14.698 7.89502 14.716V15.894C7.97102 15.912 8.06602 15.917 8.19702 15.917C8.67602 15.917 8.97102 15.675 8.97102 15.266C8.97102 14.9 8.71702 14.68 8.26702 14.68ZM11.754 14.692C11.554 14.692 11.424 14.71 11.347 14.728V17.338C11.424 17.356 11.548 17.356 11.66 17.356C12.477 17.362 13.009 16.912 13.009 15.96C13.015 15.13 12.53 14.692 11.754 14.692Z" fill="#E93535"/>
    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2ZM9.498 16.19C9.189 16.48 8.733 16.61 8.202 16.61C8.09904 16.6111 7.99613 16.6051 7.894 16.592V18.018H7V14.082C7.40345 14.0218 7.81112 13.9944 8.219 14C8.776 14 9.172 14.106 9.439 14.319C9.693 14.521 9.865 14.852 9.865 15.242C9.864 15.634 9.734 15.965 9.498 16.19ZM13.305 17.545C12.885 17.894 12.246 18.06 11.465 18.06C10.997 18.06 10.666 18.03 10.441 18V14.083C10.8446 14.0241 11.2521 13.9963 11.66 14C12.417 14 12.909 14.136 13.293 14.426C13.708 14.734 13.968 15.225 13.968 15.93C13.968 16.693 13.689 17.22 13.305 17.545ZM17 14.77H15.468V15.681H16.9V16.415H15.468V18.019H14.562V14.03H17V14.77ZM14 9H13V4L18 9H14Z" fill="#E93535"/>
    </svg>Image Caption Generation using CNN</td>
    <td>Eirene Oyakhilome</td>
    <td>12/10/2023</td>
    <td className="flex gap-3"> <span  className="flex   text-red-500 w-20 justify-center items-center rounded-md border-2 border-red-500">view</span>  <span  className="flex   text-red-500 w-20 justify-center items-center rounded-md border-2 border-red-500">Review</span></td>
  </tr>
  <tr className="border-b gap-5 border-gray-300 text-left px-8 py-4">
    <td  className=" "><svg width="16" className="inline-block" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="15" height="15" rx="1.5" stroke="#E9E9EA"/>
</svg>
23456789</td>
    <td className="flex" >     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M8.26702 14.68C8.08302 14.68 7.95902 14.698 7.89502 14.716V15.894C7.97102 15.912 8.06602 15.917 8.19702 15.917C8.67602 15.917 8.97102 15.675 8.97102 15.266C8.97102 14.9 8.71702 14.68 8.26702 14.68ZM11.754 14.692C11.554 14.692 11.424 14.71 11.347 14.728V17.338C11.424 17.356 11.548 17.356 11.66 17.356C12.477 17.362 13.009 16.912 13.009 15.96C13.015 15.13 12.53 14.692 11.754 14.692Z" fill="#E93535"/>
    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2ZM9.498 16.19C9.189 16.48 8.733 16.61 8.202 16.61C8.09904 16.6111 7.99613 16.6051 7.894 16.592V18.018H7V14.082C7.40345 14.0218 7.81112 13.9944 8.219 14C8.776 14 9.172 14.106 9.439 14.319C9.693 14.521 9.865 14.852 9.865 15.242C9.864 15.634 9.734 15.965 9.498 16.19ZM13.305 17.545C12.885 17.894 12.246 18.06 11.465 18.06C10.997 18.06 10.666 18.03 10.441 18V14.083C10.8446 14.0241 11.2521 13.9963 11.66 14C12.417 14 12.909 14.136 13.293 14.426C13.708 14.734 13.968 15.225 13.968 15.93C13.968 16.693 13.689 17.22 13.305 17.545ZM17 14.77H15.468V15.681H16.9V16.415H15.468V18.019H14.562V14.03H17V14.77ZM14 9H13V4L18 9H14Z" fill="#E93535"/>
    </svg>Image Caption Generation using CNN</td>
    <td>Eirene Oyakhilome</td>
    <td>12/10/2023</td>
    <td className="flex gap-3"> <span  className="flex   text-red-500 w-20 justify-center items-center rounded-md border-2 border-red-500">view</span>  <span  className="flex   text-red-500 w-20 justify-center items-center rounded-md border-2 border-red-500">Review</span></td>
  </tr>
  <tr className="border-b gap-5 border-gray-300 text-left px-8 py-4">
  <td  className=""><svg width="16" className="inline-block" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="15" height="15" rx="1.5" stroke="#E9E9EA"/>
</svg>
23456789</td>
    <td className="flex">     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M8.26702 14.68C8.08302 14.68 7.95902 14.698 7.89502 14.716V15.894C7.97102 15.912 8.06602 15.917 8.19702 15.917C8.67602 15.917 8.97102 15.675 8.97102 15.266C8.97102 14.9 8.71702 14.68 8.26702 14.68ZM11.754 14.692C11.554 14.692 11.424 14.71 11.347 14.728V17.338C11.424 17.356 11.548 17.356 11.66 17.356C12.477 17.362 13.009 16.912 13.009 15.96C13.015 15.13 12.53 14.692 11.754 14.692Z" fill="#E93535"/>
    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2ZM9.498 16.19C9.189 16.48 8.733 16.61 8.202 16.61C8.09904 16.6111 7.99613 16.6051 7.894 16.592V18.018H7V14.082C7.40345 14.0218 7.81112 13.9944 8.219 14C8.776 14 9.172 14.106 9.439 14.319C9.693 14.521 9.865 14.852 9.865 15.242C9.864 15.634 9.734 15.965 9.498 16.19ZM13.305 17.545C12.885 17.894 12.246 18.06 11.465 18.06C10.997 18.06 10.666 18.03 10.441 18V14.083C10.8446 14.0241 11.2521 13.9963 11.66 14C12.417 14 12.909 14.136 13.293 14.426C13.708 14.734 13.968 15.225 13.968 15.93C13.968 16.693 13.689 17.22 13.305 17.545ZM17 14.77H15.468V15.681H16.9V16.415H15.468V18.019H14.562V14.03H17V14.77ZM14 9H13V4L18 9H14Z" fill="#E93535"/>
    </svg>Image Caption Generation using CNN</td>
    <td>Eirene Oyakhilome</td>
    <td>12/10/2023</td>
    <td className="flex gap-3"> <span  className="flex   text-red-500 w-20 justify-center items-center rounded-md border-2 border-red-500">view</span>  <span  className="flex   text-red-500 w-20 justify-center items-center rounded-md border-2 border-red-500">Review</span></td>
  </tr>
  <tr className="border-b gap-5 border-gray-300 text-left px-8 py-4">
  <td  className=""><svg width="16" className="inline-block" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="15" height="15" rx="1.5" stroke="#E9E9EA"/>
</svg>
23456789</td>
    <td className="flex">     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M8.26702 14.68C8.08302 14.68 7.95902 14.698 7.89502 14.716V15.894C7.97102 15.912 8.06602 15.917 8.19702 15.917C8.67602 15.917 8.97102 15.675 8.97102 15.266C8.97102 14.9 8.71702 14.68 8.26702 14.68ZM11.754 14.692C11.554 14.692 11.424 14.71 11.347 14.728V17.338C11.424 17.356 11.548 17.356 11.66 17.356C12.477 17.362 13.009 16.912 13.009 15.96C13.015 15.13 12.53 14.692 11.754 14.692Z" fill="#E93535"/>
    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2ZM9.498 16.19C9.189 16.48 8.733 16.61 8.202 16.61C8.09904 16.6111 7.99613 16.6051 7.894 16.592V18.018H7V14.082C7.40345 14.0218 7.81112 13.9944 8.219 14C8.776 14 9.172 14.106 9.439 14.319C9.693 14.521 9.865 14.852 9.865 15.242C9.864 15.634 9.734 15.965 9.498 16.19ZM13.305 17.545C12.885 17.894 12.246 18.06 11.465 18.06C10.997 18.06 10.666 18.03 10.441 18V14.083C10.8446 14.0241 11.2521 13.9963 11.66 14C12.417 14 12.909 14.136 13.293 14.426C13.708 14.734 13.968 15.225 13.968 15.93C13.968 16.693 13.689 17.22 13.305 17.545ZM17 14.77H15.468V15.681H16.9V16.415H15.468V18.019H14.562V14.03H17V14.77ZM14 9H13V4L18 9H14Z" fill="#E93535"/>
    </svg>Image Caption Generation using CNN</td>
    <td>Eirene Oyakhilome</td>
    <td>12/10/2023</td>
    <td className="flex gap-3"> <span  className="flex   text-red-500 w-20 justify-center items-center rounded-md border-2 border-red-500">view</span>  <span  className="flex   text-red-500 w-20 justify-center items-center rounded-md border-2 border-red-500">Review</span></td>
  </tr>
  <tr className="border-b  border-gray-300 text-left gap-11 px-8 py-4">
  <td  className=""><svg width="16" className="inline-block" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="15" height="15" rx="1.5" stroke="#E9E9EA"/>
</svg>
23456789</td>
    <td className="flex">     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M8.26702 14.68C8.08302 14.68 7.95902 14.698 7.89502 14.716V15.894C7.97102 15.912 8.06602 15.917 8.19702 15.917C8.67602 15.917 8.97102 15.675 8.97102 15.266C8.97102 14.9 8.71702 14.68 8.26702 14.68ZM11.754 14.692C11.554 14.692 11.424 14.71 11.347 14.728V17.338C11.424 17.356 11.548 17.356 11.66 17.356C12.477 17.362 13.009 16.912 13.009 15.96C13.015 15.13 12.53 14.692 11.754 14.692Z" fill="#E93535"/>
    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2ZM9.498 16.19C9.189 16.48 8.733 16.61 8.202 16.61C8.09904 16.6111 7.99613 16.6051 7.894 16.592V18.018H7V14.082C7.40345 14.0218 7.81112 13.9944 8.219 14C8.776 14 9.172 14.106 9.439 14.319C9.693 14.521 9.865 14.852 9.865 15.242C9.864 15.634 9.734 15.965 9.498 16.19ZM13.305 17.545C12.885 17.894 12.246 18.06 11.465 18.06C10.997 18.06 10.666 18.03 10.441 18V14.083C10.8446 14.0241 11.2521 13.9963 11.66 14C12.417 14 12.909 14.136 13.293 14.426C13.708 14.734 13.968 15.225 13.968 15.93C13.968 16.693 13.689 17.22 13.305 17.545ZM17 14.77H15.468V15.681H16.9V16.415H15.468V18.019H14.562V14.03H17V14.77ZM14 9H13V4L18 9H14Z" fill="#E93535"/>
    </svg>Image Caption Generation using CNN</td>
    <td>Eirene Oyakhilome</td>
    <td>12/10/2023</td>
    <td className="flex gap-3"> <span  className="flex   text-red-500 w-20 justify-center items-center rounded-md border-2 border-red-500">view</span>  <span  className="flex   text-red-500 w-20 justify-center items-center rounded-md border-2 border-red-500">Review</span></td>
  </tr>
  <tr>
  <td  className=""><svg width="16" className="inline-block" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="15" height="15" rx="1.5" stroke="#E9E9EA"/>
</svg>
23456789</td>
    <td className="flex">     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M8.26702 14.68C8.08302 14.68 7.95902 14.698 7.89502 14.716V15.894C7.97102 15.912 8.06602 15.917 8.19702 15.917C8.67602 15.917 8.97102 15.675 8.97102 15.266C8.97102 14.9 8.71702 14.68 8.26702 14.68ZM11.754 14.692C11.554 14.692 11.424 14.71 11.347 14.728V17.338C11.424 17.356 11.548 17.356 11.66 17.356C12.477 17.362 13.009 16.912 13.009 15.96C13.015 15.13 12.53 14.692 11.754 14.692Z" fill="#E93535"/>
    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2ZM9.498 16.19C9.189 16.48 8.733 16.61 8.202 16.61C8.09904 16.6111 7.99613 16.6051 7.894 16.592V18.018H7V14.082C7.40345 14.0218 7.81112 13.9944 8.219 14C8.776 14 9.172 14.106 9.439 14.319C9.693 14.521 9.865 14.852 9.865 15.242C9.864 15.634 9.734 15.965 9.498 16.19ZM13.305 17.545C12.885 17.894 12.246 18.06 11.465 18.06C10.997 18.06 10.666 18.03 10.441 18V14.083C10.8446 14.0241 11.2521 13.9963 11.66 14C12.417 14 12.909 14.136 13.293 14.426C13.708 14.734 13.968 15.225 13.968 15.93C13.968 16.693 13.689 17.22 13.305 17.545ZM17 14.77H15.468V15.681H16.9V16.415H15.468V18.019H14.562V14.03H17V14.77ZM14 9H13V4L18 9H14Z" fill="#E93535"/>
    </svg> Image Caption Generation using CNN</td>
    <td>Eirene Oyakhilome</td>
    <td>12/10/2023</td>
    <td className="flex gap-3"> <span  className="flex   text-red-500 w-20 justify-center items-center rounded-md border-2 border-red-500">view</span>  <span  className="flex   text-red-500 w-20 justify-center items-center rounded-md border-2 border-red-500">Review</span></td>
  </tr>
</table>
    <div>
</div>
 </div>

</div>
    </div>
</div>
    </>
  )
}
