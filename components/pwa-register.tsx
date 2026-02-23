'use client';

/// <reference path="../types/pwa.d.ts" />
import { useEffect } from 'react';

export function PWARegister() {
  useEffect(() => {
    // Check if service workers are supported
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/service-worker.js', {
            scope: '/',
          })
          .then((registration) => {
            console.log('[PWA] Service Worker registered successfully:', registration);
          })
          .catch((error) => {
            console.log('[PWA] Service Worker registration failed:', error);
          });
      });
    }

    // Handle install prompt for PWA
    let deferredPrompt: BeforeInstallPromptEvent | null = null;

    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event for later use
      deferredPrompt = e;
      console.log('[PWA] Install prompt available');
    });

    // Listen for app installed event
    window.addEventListener('appinstalled', () => {
      console.log('[PWA] App installed successfully');
      deferredPrompt = null;
    });

    // You can trigger install prompt from a button if desired
    // This is typically called from a "Install App" button in the UI
    if (deferredPrompt) {
      // Show install prompt
      // deferredPrompt.prompt();
    }

    return () => {
      // Cleanup
    };
  }, []);

  return null;
}
