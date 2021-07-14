declare module "about/AboutApp" { 
    const mountAboutApp: (el: HTMLElement, options?: {}) => {
      onContainerNavigate?: any
    }; 
   
    export { mountAboutApp }; 
}