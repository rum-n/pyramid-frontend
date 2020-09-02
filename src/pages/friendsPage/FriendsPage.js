import React from 'react';
import './styles.css';
import UserNav from '../../components/nav/UserNav';
import SideNav from '../../components/sidenav/SideNav';
import OrderForm from '../../components/orderForm/OrderForm';
import useModal from '../../useModal';

const FriendsPage = () => {
  // const [friends, setFriends] = useState([]);
  const {isShowing, toggle} = useModal();

  // const url = `http://127.0.0.1:5000/listfriends/nearby`;
  //   const fetchFriends = async () => {
  //       const res = await fetch(url, { mode: 'no-cors', type:'GET'});
  //       // const loginJSON = await res.json();
  //       // setFriends(loginJSON);
  //       console.log(res)
  //   };

  //   useEffect(() => {
  //     fetchFriends();
  //   },[])

    // useEffect(() => {
    //     fetch(url, { mode: 'no-cors'}).then(res =>
    //       res.json().then(data => {
    //         console.log(data);
    //       })
    //     );
    // }, []);

  return (
    <React.Fragment>
      <UserNav/>
      <div className='userpage-wrapper'>
        <SideNav/>
        <div className='user-main'>
          <div className='purchases-header'>
            <h1>Friends</h1>
            <h1 id='what-to-eat-header'>Grub With Them</h1>
          </div>
          <div className='friends-wrapper'>
            <div className='friends-list'>
              <div className='single-friend'>
                <div className='friends-photo'></div>
                <p>Joshua Ocampo</p>
              </div>
              <div className='single-friend'>
                <div className='friends-photo'></div>
                <p>Joshua Ocampo</p>
              </div>
              <div className='single-friend'>
                <div className='friends-photo'></div>
                <p>Joshua Ocampo</p>
              </div>
              <div className='single-friend'>
                <div className='friends-photo'></div>
                <p>Joshua Ocampo</p>
              </div>
              <div className='single-friend'>
                <div className='friends-photo'></div>
                <p>Joshua Ocampo</p>
              </div>
              <div className='single-friend'>
                <div className='friends-photo'></div>
                <p>Joshua Ocampo</p>
              </div>
            </div>
            <div className='what-friends-eat'>
              <div className='single-eating-wish' onClick={toggle}>
                <div className='wish-number'>1</div>
                <div className='wish-friends'><strong>Joshua O</strong>, <strong>Maggie Z</strong>,<strong>Adam R</strong>, <strong>Mohit B</strong>, and <strong>6 others</strong></div>
                <div className='time-and-place'>
                  <h1>Chipotle</h1>
                  <p>3:00 PM @ Hyde Park</p>
                </div>
              </div>
              <div className='single-eating-wish' onClick={toggle}>
                <div className='wish-number'>1</div>
                <div className='wish-friends'><strong>Joshua O</strong>, <strong>Maggie Z</strong>,<strong>Adam R</strong>, <strong>Mohit B</strong>, and <strong>6 others</strong></div>
                <div className='time-and-place'>
                  <h1>Chipotle</h1>
                  <p>3:00 PM @ Hyde Park</p>
                </div>
              </div>
              <div className='single-eating-wish' onClick={toggle}>
                <div className='wish-number'>1</div>
                <div className='wish-friends'><strong>Joshua O</strong>, <strong>Maggie Z</strong>,<strong>Adam R</strong>, <strong>Mohit B</strong>, and <strong>6 others</strong></div>
                <div className='time-and-place'>
                  <h1>Chipotle</h1>
                  <p>3:00 PM @ Hyde Park</p>
                </div>
              </div>
              <div className='single-eating-wish' onClick={toggle}>
                <div className='wish-number'>1</div>
                <div className='wish-friends'><strong>Joshua O</strong>, <strong>Maggie Z</strong>,<strong>Adam R</strong>, <strong>Mohit B</strong>, and <strong>6 others</strong></div>
                <div className='time-and-place'>
                  <h1>Chipotle</h1>
                  <p>3:00 PM @ Hyde Park</p>
                </div>
              </div>
              <div className='single-eating-wish' onClick={toggle}>
                <div className='wish-number'>1</div>
                <div className='wish-friends'><strong>Joshua O</strong>, <strong>Maggie Z</strong>,<strong>Adam R</strong>, <strong>Mohit B</strong>, and <strong>6 others</strong></div>
                <div className='time-and-place'>
                  <h1>Chipotle</h1>
                  <p>3:00 PM @ Hyde Park</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <OrderForm isShowing={isShowing} hide={toggle}/>
      </div>
    </React.Fragment>
  );
}

export default FriendsPage;