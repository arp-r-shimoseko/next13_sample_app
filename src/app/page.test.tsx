import Home from './page';
import mockRouter from 'next-router-mock';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ReactNode } from 'react';

jest.mock('next/router', () => require('next-router-mock'));

jest.mock('next/link', () => {
  interface MockLinkProps {
    children: ReactNode;
    href: string;
  }

  const mockLink = ({ children, href }: MockLinkProps) => {
    return (
      <a href={href} onClick={() => mockRouter.push(href)}>
        {children}
      </a>
    );
  };
  mockLink.displayName = 'Link';

  return mockLink;
});

describe('テスト', () => {
  beforeEach(() => {
    render(<Home />);
    jest.clearAllMocks();
  });

  test('レンダリングテスト', async () => {
    const element = screen.getByTestId('test');

    await waitFor(() => {
      expect(screen.getByText('テスト')).toBeInTheDocument();
      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent('Get started by editing');
    });
  });

  test('ルーティングテスト', async () => {
    const button = screen.getByText('Go to Test Page');
    mockRouter.setCurrentUrl('/');

    fireEvent.click(button);

    await waitFor(() => {
      expect(mockRouter.asPath).toEqual('/test');
    });
  });
});
