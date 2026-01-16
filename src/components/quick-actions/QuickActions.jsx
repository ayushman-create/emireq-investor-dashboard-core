import './QuickActions.css';

export default function QuickActions() {
  const actions = [
    {
      icon: 'plus',
      color: 'blue',
      title: 'New Investment',
      description: 'Explore opportunities',
    },
    {
      icon: 'withdraw',
      color: 'purple',
      title: 'Withdraw Funds',
      description: 'Transfer to bank',
    },
    {
      icon: 'download',
      color: 'green',
      title: 'Download Report',
      description: 'Get monthly statement',
    },
    {
      icon: 'reinvest',
      color: 'orange',
      title: 'Reinvest Returns',
      description: 'Compound earnings',
    },
  ];

  const getIcon = (iconType) => {
    switch (iconType) {
      case 'plus':
        return (
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.70312 11.2871H17.8719" stroke="#155DFC" stroke-width="1.88125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.2871 4.70312V17.8719" stroke="#155DFC" stroke-width="1.88125" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        );
      case 'withdraw':
        return (
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.58398 6.58398H15.9903V15.9903" stroke="#7F22FE" stroke-width="1.88125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.58398 15.9903L15.9903 6.58398" stroke="#7F22FE" stroke-width="1.88125" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        );
      case 'download':
        return (
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2871 14.1098V2.82227" stroke="#00B031" stroke-width="1.88125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.7536 14.1094V17.8719C19.7536 18.3708 19.5553 18.8493 19.2025 19.2021C18.8497 19.5549 18.3712 19.7531 17.8723 19.7531H4.70352C4.20458 19.7531 3.72608 19.5549 3.37327 19.2021C3.02047 18.8493 2.82227 18.3708 2.82227 17.8719V14.1094" stroke="#00B031" stroke-width="1.88125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.58398 9.40625L11.2871 14.1094L15.9903 9.40625" stroke="#00B031" stroke-width="1.88125" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        );
      case 'reinvest':
        return (
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.82227 11.2879C2.82227 9.04268 3.71418 6.88941 5.30179 5.30179C6.88941 3.71418 9.04268 2.82227 11.2879 2.82227C13.6546 2.83117 15.9262 3.75464 17.6277 5.39958L19.7536 7.5254" stroke="#E17100" stroke-width="1.88125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.7539 2.82227V7.5254H15.0508" stroke="#E17100" stroke-width="1.88125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.7536 11.2871C19.7536 13.5323 18.8616 15.6856 17.274 17.2732C15.6864 18.8608 13.5331 19.7528 11.2879 19.7528C8.92125 19.7438 6.64965 18.8204 4.94808 17.1754L2.82227 15.0496" stroke="#E17100" stroke-width="1.88125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5254 15.0508H2.82227V19.7539" stroke="#E17100" stroke-width="1.88125" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        );
      default:
        return null;
    }
  };

  return (
    <div className="em-quick-actions">
      <div className="em-quick-actions-header">
  {/* LEFT */}
  <div className="em-quick-actions-text">
    <h3 className="em-quick-actions-title">
      Quick Actions
      <span className="em-info-icon">
        {/* your info svg */}
        <svg width="4" height="11" viewBox="0 0 4 11" fill="none">
          <path
            d="M3.30469 2.24219C3.42969 2.02344 3.5 1.76953 3.5 1.5C3.5 0.671875 2.82812 0 2 0C1.17188 0 0.5 0.671875 0.5 1.5C0.5 2.32812 1.17188 3 2 3C2.55859 3 3.04688 2.69531 3.30469 2.24219ZM1 4H2.5C3.05273 4 3.5 4.44727 3.5 5V10C3.5 10.5527 3.05273 11 2.5 11C1.94727 11 1.5 10.5527 1.5 10V6.75C1.5 6.33594 1.16406 6 0.75 6C0.335938 6 0 5.66406 0 5.25V5C0 4.64844 0.181641 4.33789 0.455078 4.16016C0.611328 4.05859 0.798828 4 1 4Z"
            fill="white"
          />
        </svg>
      </span>
    </h3>

    <p className="em-quick-actions-subtitle">
      Common tasks and operations
    </p>
  </div>

  {/* RIGHT */}
  <div className="em-quick-actions-actions">
    <button aria-label="Expand">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 19H5V14M14 5H19V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    </button>

    <button aria-label="Edit">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7697 5.17029C15.4037 4.53917 16.429 4.54036 17.0616 5.17295L18.8289 6.94024C19.4614 7.57274 19.4627 8.59782 18.8318 9.23193L8.67324 19.4424L4.55927 19.4424L4.55927 15.3333L14.7697 5.17029Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.4805 6.46289L17.5368 10.5192" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
</svg>

    </button>

    <button aria-label="More options">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 10.1504C6.50986 10.1504 6.94252 10.3302 7.30664 10.6943C7.67076 11.0585 7.85023 11.4909 7.84961 12L7.8418 12.1875C7.8024 12.617 7.6243 12.988 7.30566 13.3066C6.94155 13.6708 6.50908 13.8502 6 13.8496C5.49014 13.8496 5.05748 13.6698 4.69336 13.3057C4.32924 12.9415 4.14977 12.5091 4.15039 12C4.15039 11.4901 4.33022 11.0575 4.69434 10.6934C5.01294 10.3748 5.38368 10.1971 5.8125 10.1582L6 10.1504ZM12 10.1504C12.5099 10.1504 12.9425 10.3302 13.3066 10.6943C13.6708 11.0585 13.8502 11.4909 13.8496 12L13.8418 12.1875C13.8024 12.617 13.6243 12.988 13.3057 13.3066C12.9415 13.6708 12.5091 13.8502 12 13.8496C11.4901 13.8496 11.0575 13.6698 10.6934 13.3057C10.3292 12.9415 10.1498 12.5091 10.1504 12C10.1504 11.4901 10.3302 11.0575 10.6943 10.6934C11.0129 10.3748 11.3837 10.1971 11.8125 10.1582L12 10.1504ZM18 10.1504C18.5099 10.1504 18.9425 10.3302 19.3066 10.6943C19.6708 11.0585 19.8502 11.4909 19.8496 12L19.8418 12.1875C19.8024 12.617 19.6243 12.988 19.3057 13.3066C18.9415 13.6708 18.5091 13.8502 18 13.8496C17.4901 13.8496 17.0575 13.6698 16.6934 13.3057C16.3292 12.9415 16.1498 12.5091 16.1504 12C16.1504 11.4901 16.3302 11.0575 16.6943 10.6934C17.0129 10.3748 17.3837 10.1971 17.8125 10.1582L18 10.1504Z" fill="currentColor" stroke="white" strokeWidth="0.3"/>
</svg>

    </button>
  </div>
</div>










      <div className="em-quick-actions-list">
        {actions.map((action, index) => (
          <button key={index} className={`em-quick-action-item em-quick-action-item--${action.color}`}>
            <div className="em-quick-action-icon">
              {getIcon(action.icon)}
            </div>
            <div className="em-quick-action-content">
              <span className="em-quick-action-title">{action.title}</span>
              <span className="em-quick-action-description">{action.description}</span>
            </div>
           <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.39062 4.38867H10.6615V10.6595" stroke="#99A1AF" stroke-width="1.25417" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.39062 10.6595L10.6615 4.38867" stroke="#99A1AF" stroke-width="1.25417" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </button>
        ))}
      </div>
    </div>
  );
}

