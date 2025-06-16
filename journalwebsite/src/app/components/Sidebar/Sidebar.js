'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  Home,
  LineChart,
  MessageCircle,
  BookOpen,
  Calendar,
  User,
  ChevronLeft,
} from 'lucide-react';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { icon: <Home size={20} />, label: 'Dashboard', href: '/dashboard' },
    { icon: <LineChart size={20} />, label: 'Journey Overview', href: '/journeyoverview' },
    { icon: <MessageCircle size={20} />, label: 'Chat', href: '/chat' },
    { icon: <BookOpen size={20} />, label: 'Entries', href: '/entries' },
    { icon: <Calendar size={20} />, label: 'Calendar', href: '/calendar' },
  ];

  return (
    <aside className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <h2>Fearless Academy</h2>
        </div>
        <div className={styles.menuSection}>
          {menuItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className={`${styles.menuItem} ${pathname === item.href ? styles.active : ''}`}
            >
              {item.icon}
              <span className={styles.menuLabel}>{item.label}</span>
            </Link>
          ))}
        </div>

        <div className={styles.bottomSection}>
          <Link 
            href="/account" 
            className={`${styles.menuItem} ${pathname === '/account' ? styles.active : ''}`}
          >
            <User size={20} />
            <span className={styles.menuLabel}>Account</span>
          </Link>
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={styles.collapseButton}
          >
            <ChevronLeft size={20} />
          </button>
        </div>
      </nav>
    </aside>
  );
} 