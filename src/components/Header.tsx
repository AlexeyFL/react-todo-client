import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import styles from '../styles/Header.module.css';
import { Link, NavLink } from 'react-router-dom';
import { logoutUser } from '../store/user/userSlice';
import { ReactComponent as LogoIcon } from '../assets/logo.svg';
import { ReactComponent as BarsIcon } from '../assets/bars.svg';

const Header = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const [openHeaderActions, setOpenHeaderActions] = useState<boolean>(false);

  const headerActionsClasses = openHeaderActions
    ? `${styles.header__actions} ${styles['header__actions--active']}`
    : `${styles.header__actions}`;

  const logout = () => {
    dispatch(logoutUser());
  };

  const toggleActions = () => {
    setOpenHeaderActions((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <div className={styles.header__part}>
          <Link to={'/'} className="logo">
            <LogoIcon fill="#03a9f4" />
          </Link>
        </div>

        <div className={headerActionsClasses}>
          {user && (
            <div className={styles.header__part}>
              <nav className="nav">
                <NavLink
                  to={'/'}
                  className={(navData) =>
                    navData.isActive ? 'nav__link active' : 'nav__link'
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to={'/todos'}
                  className={(navData) =>
                    navData.isActive ? 'nav__link active' : 'nav__link'
                  }
                >
                  Todos
                </NavLink>
              </nav>
            </div>
          )}

          <div className={styles.header__part}>
            {user ? (
              <div className={styles.user}>
                <div className={styles.user__name}>
                  {user ? user.username : ''}
                </div>
                <button className={styles.user__btn} onClick={() => logout()}>
                  Logout
                </button>
              </div>
            ) : (
              <div className={styles.header__links}>
                <Link className={styles.header__link} to={'/register'}>
                  Login/Register
                </Link>
              </div>
            )}
          </div>
        </div>
        <BarsIcon onClick={() => toggleActions()} className={styles.bars} />
      </div>
    </header>
  );
};

export default Header;
